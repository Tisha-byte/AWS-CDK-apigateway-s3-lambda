import {aws_s3, Stack, StackProps } from "aws-cdk-lib"
import { Construct } from "constructs"
import * as s3 from "aws-cdk-lib/aws-s3"
export class S3Stack1 extends  Stack{
    constructor(scope:Construct , id:string){
   super(scope,id)
   const test_s3=new s3.Bucket(this,'test-s3',{
   bucketName:'test1-s3-api-lambda',
   versioned:true
   });
}}