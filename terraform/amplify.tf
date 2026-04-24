# Amplify app for static site hosting
resource "aws_amplify_app" "main" {
  provider = aws
  name     = "${var.project_name}-${var.environment}"
  repository = "https://github.com/ajhughes/skyhughes"

  environment_variables = {
    ENVIRONMENT = var.environment
  }

  tags = {
    Project     = var.project_name
    Environment = var.environment
  }
}

# Example: Amplify branch
resource "aws_amplify_branch" "main" {
  provider = aws
  app_id   = aws_amplify_app.main.id
  branch_name = var.environment
}
