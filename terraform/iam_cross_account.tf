# Cross-account IAM role for non-prod and prod access (in main account)
resource "aws_iam_role" "cross_account_access" {
  name = "CrossAccountAccessRole"

  assume_role_policy = jsonencode({
    Version = "2012-10-17",
    Statement = [
      {
        Effect = "Allow",
        Principal = {
          AWS = [
            "arn:aws:iam::947999370466:role/NonProdAccessRole", # non-prod role
            "arn:aws:iam::610489687480:role/ProdAccessRole"     # prod role
          ]
        },
        Action = "sts:AssumeRole"
      }
    ]
  })
}

# Example: Attach S3 read/write permissions to the role
resource "aws_iam_role_policy" "cross_account_s3" {
  name = "CrossAccountS3Policy"
  role = aws_iam_role.cross_account_access.id

  policy = jsonencode({
    Version = "2012-10-17",
    Statement = [
      {
        Effect = "Allow",
        Action = [
          "s3:ListBucket",
          "s3:GetObject",
          "s3:PutObject"
        ],
        Resource = [
          "arn:aws:s3:::skyhughes-main-927535349173",
          "arn:aws:s3:::skyhughes-main-927535349173/*"
        ]
      }
    ]
  })
}
