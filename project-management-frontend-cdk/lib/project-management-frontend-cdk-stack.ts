import { Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as cdk from 'aws-cdk-lib';
import * as s3 from 'aws-cdk-lib/aws-s3';
import * as s3deploy from 'aws-cdk-lib/aws-s3-deployment';
import * as cloudfront from 'aws-cdk-lib/aws-cloudfront';
import * as origins from 'aws-cdk-lib/aws-cloudfront-origins';

export class ProjectManagementFrontendCdkStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const bucket = new s3.Bucket(this, 'ProjectManagementFrontendBucket', {
      publicReadAccess: true,
      removalPolicy: cdk.RemovalPolicy.DESTROY,
      websiteIndexDocument: 'index.html',
    });

    new s3deploy.BucketDeployment(this, 'DeployProjectManagementFrontend', {
      sources: [s3deploy.Source.asset('../build')],
      destinationBucket: bucket,
    });

    new cloudfront.Distribution(this, 'DeployProjectManagementFrontendCF', {
      defaultBehavior: { origin: new origins.S3Origin(bucket) },
    });
  }
}
