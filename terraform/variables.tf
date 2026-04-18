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

variable "project_name" {
  description = "Project name used for resource naming"
  type        = string
  default     = "skyhughes"
}
