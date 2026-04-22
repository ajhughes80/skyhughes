terraform {
  required_version = ">= 1.5"

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }

  # Remote state in S3 — keeps terraform state safe and shared
  backend "s3" {
    bucket = "skyhughes-terraform-state"
    key    = "skyhughes/terraform.tfstate"
    region = "us-east-1"
    profile = "prod"
  }
}


# Default provider (for current environment)
provider "aws" {
  region  = var.aws_region
  profile = var.aws_profile
}

# Provider for main account (legacy/migration)
provider "aws" {
  alias   = "main"
  region  = var.aws_region
  profile = var.main_aws_profile
}

# Provider for prod account
provider "aws" {
  alias   = "prod"
  region  = var.aws_region
  profile = var.prod_aws_profile
}

# Provider for non-prod account
provider "aws" {
  alias   = "nonprod"
  region  = var.aws_region
  profile = var.nonprod_aws_profile
}

# Provider alias for us-east-1 (required for CloudFront ACM certs)
provider "aws" {
  alias  = "us_east_1"
  region = "us-east-1"
}
