import { Stack, StackProps } from "aws-cdk-lib";
import { Construct } from "constructs";
import { Function as LambdaFunction, Runtime, Code } from "aws-cdk-lib/aws-lambda";
import { join } from 'path';
import { LambdaIntegration } from "aws-cdk-lib/aws-apigateway";
import * as iam from 'aws-cdk-lib/aws-iam';

export class LambdaStacktest extends Stack {
    public readonly lambdaint: LambdaIntegration;  

    constructor(scope: Construct, id: string) {
        super(scope, id);

      
        const iam_role = new iam.Role(this, 's3-access', {
            roleName: 's3-access',
            assumedBy: new iam.ServicePrincipal('lambda.amazonaws.com')
        });
        iam_role.addManagedPolicy(iam.ManagedPolicy.fromAwsManagedPolicyName('AmazonS3FullAccess'));

       
        const lambda = new LambdaFunction(this, 'test-lambda', {
            functionName: 'test-lambda-func',
            runtime: Runtime.PYTHON_3_12,
            handler: 'handler.lambda_handler',
            code: Code.fromAsset(join(__dirname, '..', '..', 'services')),
            role: iam_role
        });

        
        this.lambdaint = new LambdaIntegration(lambda);
    }
}
