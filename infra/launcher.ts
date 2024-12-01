import { App } from 'aws-cdk-lib';
import { ApiStacktest } from './stacks/apigatewaystack';
import { LambdaStacktest } from './stacks/lambdastack';
import { S3Stack1 } from './stacks/s3stack';

const app4 = new App();
const s3Stack = new S3Stack1(app4, 'S3Stack');
const lambdastack=new LambdaStacktest(app4,'LambdaStack')
const apistack=new ApiStacktest(app4,'ApiStack' ,{
    lambdaint: lambdastack.lambdaint
});


