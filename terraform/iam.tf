# IAM user for GitHub Actions to deploy to S3
resource "aws_iam_user" "deployer" {
  name = "${var.project_name}-${var.environment}-deployer"

  tags = {
    Project     = var.project_name
    Environment = var.environment
  }
}

resource "aws_iam_user_policy" "deployer" {
  name = "${var.project_name}-${var.environment}-deploy-policy"
  user = aws_iam_user.deployer.name

  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Sid    = "S3Deploy"
        Effect = "Allow"
        Action = [
          "s3:PutObject",
          "s3:DeleteObject",
          "s3:ListBucket",
          "s3:GetObject"
        ]
        Resource = [
          aws_s3_bucket.website.arn,
          "${aws_s3_bucket.website.arn}/*"
        ]
      },
      {
        Sid    = "CloudFrontInvalidate"
        Effect = "Allow"
        Action = [
          "cloudfront:CreateInvalidation",
          "cloudfront:GetInvalidation"
        ]
        Resource = aws_cloudfront_distribution.website.arn
      }
    ]
  })
}

resource "aws_iam_access_key" "deployer" {
  user = aws_iam_user.deployer.name
}
