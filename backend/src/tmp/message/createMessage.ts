import {parsing} from '../xml'
import {get as _get, chunk as _chunk} from 'lodash'
import {v4} from 'uuid'
import {snakeCase} from 'snake-case'
import util from 'util'
import fs from 'fs';
enum MessageCommand {
    SAVE_ACCOUNT = 'save_account',
    SAVE_BANK = 'save_bank',
    SAVE_COMPANY = 'save_company',
}

const impl = async () =>{
    // default is set
   const jsonFile =  await parsing()
   const dataPath = new Map<any, string>([
        ["account", 'accounts.account'],
        
    ]);
    console.log(1)
    // on le coupe comme lui, voir juste les 3 premiers truc au debut
    for (const [childName, path] of dataPath) {
        let xmlParsedData = _get(jsonFile, path, undefined);
        const bulkSize = 50;
        // const messagesBulks = _chunk(
        //     createMessages(childName, xmlParsedData),
        //     bulkSize
        // );
        const messagesBulks = _chunk(
            {"1":true},
            bulkSize
        );
        
        console.log(messagesBulks)
        // console.log(messagesBulks[0])
        //console.log(JSON.stringify(util.inspect(messagesBulks, {depth:10})));

        // fs.writeFile("pop.json",JSON.stringify(messagesBulks), (err) => {
        //     console.log(err);
        // })
    }
    console.log(2)

}

function ensureIsArray(obj: unknown) {
    return Array.isArray(obj) ? obj : [obj];
}

function createMessages(
    childName: any,
    xmlData: { [k: string]: any } | { [k: string]: any }[]
  ): any[] {
    return ensureIsArray(xmlData).map((xmlData) => {
      const childId = v4();
      const child_name = snakeCase(childName);
      const command = `SAVE_${child_name.toUpperCase()}`;
        const someKey = v4()
      return {
        id: v4(),
        stream_name: `${childName}:command-${childId}`,
        type: MessageCommand[command as keyof typeof MessageCommand],
        meta_data: {
          user_id: "1",
          file_id: someKey,
          origin_stream_name: `pivotFile:command-${someKey}`
        },
        data: {
          [`${child_name}_id`]: childId,
          [`parsed_xml_${child_name}`]: xmlData
        }
      };
    });
  }

//  {} -> const messagesBulks = _chunk(
//     createMessages(childName, xmlParsedData),
//     bulkSize
//   );

impl()


