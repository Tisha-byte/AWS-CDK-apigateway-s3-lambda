import {Stack, StackProps } from "aws-cdk-lib"
import { Construct } from "constructs"
import { LambdaIntegration, RestApi } from "aws-cdk-lib/aws-apigateway"
interface ApiStackProps extends StackProps{
    lambdaint:LambdaIntegration
   }
export class ApiStacktest extends  Stack{
    constructor(scope:Construct , id:string , props:ApiStackProps){
   super(scope,id,props)
   const restapi=new RestApi(this,'test-rest-api',{
   
    restApiName: 'MytestApi',


   });
   restapi.root.addMethod('GET',props.lambdaint);
    }}