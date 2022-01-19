require('dotenv').config('../../../.env');
import { XMLParser } from 'fast-xml-parser';
import {s3Connection} from '../../connectors/aws/s3'
import * as iconv from 'iconv-lite';
import fs from 'fs';
import util from 'util'

const {AWS_S3_BUCKET_NAME} = process.env
console.log(AWS_S3_BUCKET_NAME)
export const parsing = async(keyfile ="pivot-file/transfert_coalaIEO_1636380012705.xml")=>{
    const parser = new XMLParser
    const request =  s3Connection.getObject({Bucket:AWS_S3_BUCKET_NAME!, Key:keyfile})
    const result = await request.promise()
    const result2 = iconv.decode(result.Body as Buffer, 'win1250');
   
    const result3 = iconv.encode(result2, 'utf8');
    const parsedXml = parser.parse(result3.toString())
   
    const interestingPart = parsedXml.practiceTransfer
    fs.writeFile("parsed.json",(util.inspect(JSON.stringify(interestingPart), {depth:10})), (err) => {
        console.log(err);
    })
    //return interestingPart
}

(async () =>{
    await parsing()
})()

