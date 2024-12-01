import json
import boto3

s3 = boto3.client('s3')

def lambda_handler(event, context):
    # Hardcode the bucket name and file key
    bucket_name = 'test1-s3-api-lambda'  # Replace with your bucket name
    file_key = 'test.json'     # Replace with the S3 file key (e.g., 'my-folder/data.json')
    
    try:
        # Fetch the file from S3
        response = s3.get_object(Bucket=bucket_name, Key=file_key)
        file_content = response['Body'].read().decode('utf-8')
        
        # Parse the JSON content
        json_content = json.loads(file_content)
        
        # Return a success response with JSON data
        return {
            'statusCode': 200,
            'body': json.dumps({
                'message': 'Data fetched successfully',
                'data': json_content
            }),
            'headers': {
                'Content-Type': 'application/json'
            }
        }
        
    except Exception as e:
        # Return an error message if something goes wrong
        return {
            'statusCode': 500,
            'body': json.dumps({
                'message': 'Error fetching data',
                'error': str(e)
            }),
            'headers': {
                'Content-Type': 'application/json'
            }
        }
