import { expect as expectCDK, haveResource } from '@aws-cdk/assert';
import { App } from 'aws-cdk-lib';
import { LambdaStack } from '../../lib/stacks/tconnect-backend-stack';

describe('LambdaStack', () => {
  let app: App;
  let stack: LambdaStack;

  beforeAll(() => {
    app = new App();
    stack = new LambdaStack(app, 'MyTestStack');
  });

  it('creates a Lambda function', () => {
    expectCDK(stack).to(haveResource('AWS::Lambda::Function'));
  });

  it('sets the correct runtime for the Lambda function', () => {
    expectCDK(stack).to(
      haveResource('AWS::Lambda::Function', {
        Runtime: 'nodejs14.x',
      }),
    );
  });

  it('sets the correct handler for the Lambda function', () => {
    expectCDK(stack).to(
      haveResource('AWS::Lambda::Function', {
        Handler: 'index.handler',
      }),
    );
  });

});
