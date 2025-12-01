import * as cdk from 'aws-cdk-lib';
import { CdkMultiEnvDemoDk0112Stack } from './cdk-multi-env-demo-dk0112-stack';
import { Construct } from 'constructs';

export class CdkMultiEnvStage extends cdk.Stage {
  constructor(scope: Construct, id: string, props?: cdk.StageProps) {
    super(scope, id, props);

    new CdkMultiEnvDemoDk0112Stack(this, 'DemoStack');
  }
}
