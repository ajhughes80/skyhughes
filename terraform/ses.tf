# SES domain identity for email sending
resource "aws_ses_domain_identity" "main" {
  provider = aws
  domain   = var.domain_name
}

# Example: SES email identity (for sending from a specific address)
resource "aws_ses_email_identity" "noreply" {
  provider = aws
  email    = "noreply@${var.domain_name}"
}

# Output verification token for DNS
output "ses_domain_identity_verification_token" {
  value = aws_ses_domain_identity.main.verification_token
}
