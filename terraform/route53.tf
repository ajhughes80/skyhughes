data "aws_route53_zone" "website" {
  provider     = aws.main
  count        = var.domain_name != "" ? 1 : 0
  name         = "${var.domain_name}."
  private_zone = false
}

data "dns_ns_record_set" "delegated" {
  count = var.domain_name != "" ? 1 : 0
  host  = var.domain_name
}

locals {
  hosted_zone_name_servers = var.domain_name != "" ? sort([
    for ns in data.aws_route53_zone.website[0].name_servers : trimsuffix(lower(ns), ".")
  ]) : []

  delegated_name_servers = var.domain_name != "" ? sort([
    for ns in data.dns_ns_record_set.delegated[0].nameservers : trimsuffix(lower(ns), ".")
  ]) : []

  acm_validation_records_grouped = var.domain_name != "" ? {
    for dvo in aws_acm_certificate.website[0].domain_validation_options : trimsuffix(dvo.resource_record_name, ".") => {
      name   = trimsuffix(dvo.resource_record_name, ".")
      record = dvo.resource_record_value
      type   = dvo.resource_record_type
    }...
  } : {}

  acm_validation_records = {
    for name, records in local.acm_validation_records_grouped : name => records[0]
  }
}

resource "terraform_data" "dns_delegation_guard" {
  count = var.domain_name != "" ? 1 : 0

  input = {
    domain = var.domain_name
  }

  lifecycle {
    precondition {
      condition     = length(setsubtract(toset(local.hosted_zone_name_servers), toset(local.delegated_name_servers))) == 0 && length(setsubtract(toset(local.delegated_name_servers), toset(local.hosted_zone_name_servers))) == 0
      error_message = "DNS delegation mismatch for ${var.domain_name}. Hosted zone NS: ${join(", ", local.hosted_zone_name_servers)}. Public delegation NS: ${join(", ", local.delegated_name_servers)}. Update registrar NS or use the authoritative hosted zone/provider."
    }
  }
}

resource "aws_route53_record" "acm_validation" {
  provider   = aws.main
  for_each   = local.acm_validation_records
  depends_on = [terraform_data.dns_delegation_guard]

  zone_id         = data.aws_route53_zone.website[0].zone_id
  name            = each.value.name
  type            = each.value.type
  allow_overwrite = true
  ttl             = 60
  records         = [each.value.record]
}

resource "aws_acm_certificate_validation" "website" {
  count                   = var.domain_name != "" ? 1 : 0
  certificate_arn         = aws_acm_certificate.website[0].arn
  validation_record_fqdns = [for record in aws_route53_record.acm_validation : record.fqdn]
}

resource "aws_route53_record" "apex_alias" {
  provider   = aws.main
  count      = var.domain_name != "" ? 1 : 0
  depends_on = [terraform_data.dns_delegation_guard]
  zone_id    = data.aws_route53_zone.website[0].zone_id
  name       = var.domain_name
  type       = "A"

  alias {
    name                   = aws_cloudfront_distribution.website.domain_name
    zone_id                = aws_cloudfront_distribution.website.hosted_zone_id
    evaluate_target_health = false
  }
}

resource "aws_route53_record" "apex_alias_ipv6" {
  provider   = aws.main
  count      = var.domain_name != "" ? 1 : 0
  depends_on = [terraform_data.dns_delegation_guard]
  zone_id    = data.aws_route53_zone.website[0].zone_id
  name       = var.domain_name
  type       = "AAAA"

  alias {
    name                   = aws_cloudfront_distribution.website.domain_name
    zone_id                = aws_cloudfront_distribution.website.hosted_zone_id
    evaluate_target_health = false
  }
}

resource "aws_route53_record" "www_alias" {
  provider   = aws.main
  count      = var.domain_name != "" && contains(aws_cloudfront_distribution.website.aliases, "www.${var.domain_name}") ? 1 : 0
  depends_on = [terraform_data.dns_delegation_guard]
  zone_id    = data.aws_route53_zone.website[0].zone_id
  name       = "www.${var.domain_name}"
  type       = "A"

  alias {
    name                   = aws_cloudfront_distribution.website.domain_name
    zone_id                = aws_cloudfront_distribution.website.hosted_zone_id
    evaluate_target_health = false
  }
}

resource "aws_route53_record" "www_alias_ipv6" {
  provider   = aws.main
  count      = var.domain_name != "" && contains(aws_cloudfront_distribution.website.aliases, "www.${var.domain_name}") ? 1 : 0
  depends_on = [terraform_data.dns_delegation_guard]
  zone_id    = data.aws_route53_zone.website[0].zone_id
  name       = "www.${var.domain_name}"
  type       = "AAAA"

  alias {
    name                   = aws_cloudfront_distribution.website.domain_name
    zone_id                = aws_cloudfront_distribution.website.hosted_zone_id
    evaluate_target_health = false
  }
}