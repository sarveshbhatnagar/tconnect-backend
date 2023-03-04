# TConnect
This project is for backend that we are implementing for TConnect. We aim to have a fully automated CI/CD for this.

[![Deploy AWS CDK stack and Lambda function](https://github.com/sarveshbhatnagar/tconnect-backend/actions/workflows/lambda-deploy.yml/badge.svg?branch=main)](https://github.com/sarveshbhatnagar/tconnect-backend/actions/workflows/lambda-deploy.yml)

The basic structure is as follows:

1. All the code resides in lib/
2. lib/backend folder contains the backend logic and files with index.ts as the entry point.
3. lib/stacks contains the cdk stack used for auto deployment and update for cdk stacks.

Make sure to update internal package.json for any packaging requirements for the backend.

Read discussions.

## Typescript details

The `cdk.json` file tells the CDK Toolkit how to execute your app.

## Useful commands

* `npm run build`   compile typescript to js
* `npm run watch`   watch for changes and compile
* `npm run test`    perform the jest unit tests
* `cdk deploy`      deploy this stack to your default AWS account/region
* `cdk diff`        compare deployed stack with current state
* `cdk synth`       emits the synthesized CloudFormation template
