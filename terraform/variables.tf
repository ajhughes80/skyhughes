variable "aws_region" {
  description = "AWS region for resources"
  type        = string
  default     = "us-east-1"
}

variable "environment" {
  description = "Environment name (non-prod or prod)"
  type        = string
}

variable "domain_name" {
  description = "Custom domain name (used in prod only)"
  type        = string
  default     = ""
}

# AWS profile variables for multi-account support
variable "aws_profile" {
  description = "AWS CLI profile for the current environment"
  type        = string
  default     = "default"
}

variable "main_aws_profile" {
  description = "AWS CLI profile for the main account (legacy/migration)"
  type        = string
  default     = "main"
}

variable "prod_aws_profile" {
  description = "AWS CLI profile for the prod account"
  type        = string
  default     = "prod"
}

variable "nonprod_aws_profile" {
  description = "AWS CLI profile for the non-prod account"
  type        = string
  default     = "nonprod"
}

variable "project_name" {
  description = "Project name used for resource naming"
  type        = string
  default     = "skyhughes"
}
