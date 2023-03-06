import {Stack, StackProps} from 'aws-cdk-lib';
import { Construct } from 'constructs';
import {Runtime, Function, Code} from 'aws-cdk-lib/aws-lambda';

export class LambdaStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const lambdaFunction = new Function(this, 'BackendLambdaFunction', {
      runtime: Runtime.NODEJS_14_X,
      handler: 'index.handler',
      code: Code.fromAsset('./dist/backend/'),
    });
  }
}
