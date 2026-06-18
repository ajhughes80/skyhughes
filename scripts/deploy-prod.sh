#!/usr/bin/env bash

set -euo pipefail

PROFILE="${1:-prod}"

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ROOT_DIR="$(cd "${SCRIPT_DIR}/.." && pwd)"

echo "Checking AWS credentials for profile: ${PROFILE}"
aws --profile "${PROFILE}" sts get-caller-identity >/dev/null

echo "Reading deploy targets from Terraform outputs"
S3_BUCKET="$(terraform -chdir="${ROOT_DIR}/terraform" output -raw s3_bucket_name)"
CF_DIST_ID="$(terraform -chdir="${ROOT_DIR}/terraform" output -raw cloudfront_distribution_id)"

echo "Building site"
cd "${ROOT_DIR}"
npm run build

echo "Syncing dist to s3://${S3_BUCKET}"
aws --profile "${PROFILE}" s3 sync dist/ "s3://${S3_BUCKET}" --delete

echo "Creating CloudFront invalidation for distribution ${CF_DIST_ID}"
aws --profile "${PROFILE}" cloudfront create-invalidation --distribution-id "${CF_DIST_ID}" --paths '/*' >/dev/null

echo "Deploy complete"