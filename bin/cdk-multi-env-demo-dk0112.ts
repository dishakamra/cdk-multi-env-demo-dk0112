#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib/core';
import { CdkMultiEnvDemoDk0112Stack } from '../lib/cdk-multi-env-demo-dk0112-stack';

const app = new cdk.App();
// Define three environments
const devEnv = { account: process.env.CDK_DEV_ACCT, region: 'us-east-1' };
const stageEnv = { account: process.env.CDK_STAGE_ACCT, region: 'us-east-1' };
const prodEnv = { account: process.env.CDK_PROD_ACCT, region: 'us-east-1' };

new CdkMultiEnvDemoDk0112Stack(app, 'DemoStack-Dev', { env: devEnv });
new CdkMultiEnvDemoDk0112Stack(app, 'DemoStack-Stage', { env: stageEnv });
new CdkMultiEnvDemoDk0112Stack(app, 'DemoStack-Prod', { env: prodEnv });
