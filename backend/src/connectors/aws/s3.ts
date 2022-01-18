import { S3 } from 'aws-sdk';

export const s3Connection = new S3({
    region: process.env.AWS_REGION,
    apiVersion:process.env.API_VERSION,
    endpoint: 'http://localhost:4566',
    s3ForcePathStyle:true
})