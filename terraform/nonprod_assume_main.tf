variable "nonprod_access_role_name" {
  description = "Name of the IAM role in non-production that receives the cross-account assume-role policy."
  type        = string
  default     = "NonProdAccessRole"
}

# Attach policy to NonProdAccessRole to allow assuming the cross-account role in main
resource "aws_iam_role_policy" "assume_main_cross_account" {
  name = "AssumeMainCrossAccountRole"
  role = var.nonprod_access_role_name

  policy = jsonencode({
    Version = "2012-10-17",
    Statement = [
      {
        Effect = "Allow",
        Action = "sts:AssumeRole",
        Resource = "arn:aws:iam::927535349173:role/CrossAccountAccessRole"
      }
    ]
  })
}
