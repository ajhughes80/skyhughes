output "s3_bucket_name" {
  description = "S3 bucket name for deployments"
  value       = aws_s3_bucket.website.id
}

output "cloudfront_distribution_id" {
  description = "CloudFront distribution ID (for cache invalidation)"
  value       = aws_cloudfront_distribution.website.id
}

output "cloudfront_domain" {
  description = "CloudFront domain name"
  value       = aws_cloudfront_distribution.website.domain_name
}

output "deployer_access_key_id" {
  description = "Access key ID for the deploy IAM user (add to GitHub Secrets)"
  value       = aws_iam_access_key.deployer.id
}

output "deployer_secret_access_key" {
  description = "Secret access key for the deploy IAM user (add to GitHub Secrets)"
  value       = aws_iam_access_key.deployer.secret
  sensitive   = true
}

output "acm_certificate_validation" {
  description = "DNS records needed for ACM certificate validation (prod only)"
  value = var.domain_name != "" ? {
    for dvo in aws_acm_certificate.website[0].domain_validation_options : dvo.domain_name => {
      name  = dvo.resource_record_name
      type  = dvo.resource_record_type
      value = dvo.resource_record_value
    }
  } : {}
}
