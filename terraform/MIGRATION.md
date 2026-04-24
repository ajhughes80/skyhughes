# Migration and Cutover Steps

## 1. Prepare AWS CLI Profiles
- Ensure you have AWS CLI profiles for `main`, `prod`, and `nonprod` accounts in your `~/.aws/credentials` and `~/.aws/config`.

## 2. Initialize Terraform for Prod
- cd terraform
- terraform init -backend-config="key=skyhughes/prod/terraform.tfstate"
- terraform workspace select prod || terraform workspace new prod

## 3. Plan and Apply for Prod
- terraform plan -var-file=envs/prod.tfvars
- terraform apply -var-file=envs/prod.tfvars

## 4. S3 Data Migration
- Use AWS CLI to sync data from main to prod:
  aws s3 sync s3://skyhughes-main s3://skyhughes-prod --profile main

## 5. SES Verification
- Update DNS with SES verification token output by Terraform.
- Wait for verification to complete in AWS Console.

## 6. Lambda & Amplify
- Ensure Lambda code is zipped and available.
- Confirm Amplify app connects to the correct repo and branch.

## 7. Cutover
- Update DNS, endpoints, and integrations to use prod resources.
- Test all services in prod.

## 8. Cleanup
- Decommission resources in main after successful migration.

---

**Note:** Repeat similar steps for non-prod using its tfvars and workspace.

## 9. AWS Account
- main - 927535349173
- nonprod - 947999370466
- prod - 610489687480