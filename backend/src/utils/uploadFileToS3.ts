import {s3Connection} from '../connectors/aws/s3'

const {AWS_S3_BUCKET_NAME , APP_PIVOT_FILE_PATH} = process.env 

export const uploadFileToS3 = async (
    {fileName, contentStream, accessToken } :
    {fileName:string, contentStream: NodeJS.ReadableStream , accessToken:string }
    ) =>{
        // faire un check pour exist 
       // const found = await 
       //if(!found)
        
       try{
        const s3Key = `${APP_PIVOT_FILE_PATH}/${fileName}`
        const manager = s3Connection.upload({
            Bucket:AWS_S3_BUCKET_NAME!,
            Body:contentStream,
            Key:s3Key,
            ContentType:'application/xml',
            Metadata:{accessToken}
        })
 
        await manager.promise()
       }catch(err){
           console.log(err)
       }
}