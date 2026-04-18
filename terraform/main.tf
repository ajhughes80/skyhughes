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
  }
}

provider "aws" {
  region = var.aws_region
}

# Provider alias for us-east-1 (required for CloudFront ACM certs)
provider "aws" {
  alias  = "us_east_1"
  region = "us-east-1"
}
