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

- Ensure Lambda code is zipped and available.

## 7. Cutover
- Update DNS, endpoints, and integrations to use prod resources.
- Test all services in prod.

## 8. Cleanup
- Decommission resources in main after successful migration.

---

**Note:** Repeat similar steps for non-prod using its tfvars and workspace.

## 9. AWS Account
- main - 927535349173 
    Username is ajhughes
    Account name is Hughes-Main
    IAM user is ajhughes
    Role is AdminRole, CrossAccountAccessRole


- nonprod - 947999370466 
    Root Account name is Admin/AccessAdmin
    IAM Username is skyhughes-nonprod-user,
    Account name is Hughes-NonProd
    Role is NonProdAccessRole,
    Federated User is AWSReservedSSO_AdminAccess_7fd6e8c44b03c699/admin

- aws prod account # 610489687480
    Root Account name is Admin/AccessAdmin
    Account name is Hughes-Prod
    IAM Username is skyhughes-prod-user,
    Role is ProdAccessRole,
    Federated User is AWSReservedSSO_AdminAccess_89e3114a3cb9d8db/admin

