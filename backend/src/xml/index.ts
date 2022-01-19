// -> fs -> parsing
// -> parsing ->  [account] -> event bulk insert avec data:[{fields}] 
// -> event -> pubsub mongo -> insert dans la db -> creeer un message de validation saved

import fs from 'fs';
import { XMLParser } from 'fast-xml-parser';
import {ObjectId} from 'mongodb';
import {chunk as _chunk, get as _get} from 'lodash'
import { Message_store } from "../models";

const xml = fs.readFileSync('./littlexml.xml');

const parser = new XMLParser();

const jsonXML = parser.parse(xml)
const practiceTransfer = jsonXML.practiceTransfer
const tuple = [["account", 'accounts.account']]
const accountData = _get(practiceTransfer, tuple[0][1] , undefined);
console.log(accountData)
const bulkSize = 50;
const messagesBulks = _chunk(
    createMessages(tuple[0][0], accountData),
    bulkSize
);

console.log(messagesBulks);
const promises = messagesBulks.map(async (messagesBulk) => writeMessageBulk(messagesBulk))
Promise.all(promises)

console.log("success", success)
async function  writeMessageBulk(item){
  //const command = `SAVE_ACCOUNT_LIST_BULK`;

     const newMessage = await Message_store.create({
      id: new ObjectId(),
      stream_name: `pivotFile:command-${new ObjectId()}`,
      type: "SAVE_ACCOUNT_LIST_BULK",
      meta_data: {
        user_id: 1, // get the message in the database
        file_id: 1
      },
      data: { messages_bulk: item }
    });

    return newMessage
}
function createMessages(name:any, xmlData:any){

   const isArrayXmlData =  Array.isArray(xmlData) ? xmlData : [xmlData];
   return isArrayXmlData.map(xmlData =>{
       const someId = new ObjectId();
       const my_command = `save_${name}`;
       const fileId = new ObjectId()
       const newMessage = {
        id:new ObjectId(),
        stream_name:`${name}:command-${someId}`,
        type:`save_${name}`,
        meta_data: {
            user_id: "1",
            file_id: fileId,
            origin_stream_name: `pivotFile:command-${fileId}`
          },
          data: {
            [`${name}_id`]: someId,
            [`parsed_xml_${name}`]: xmlData
          }
       }
       return newMessage
   })
}
