import fs from "fs";
import path from 'path'
import { initDatabase } from "./connectors/mongodb";
import { xmlToJson } from './xml/parse';
import { File } from "./models";
import { saveJsonifyXmlToDb } from './xml/'

(async () => {
    await initDatabase()
   
    const filename = 'coala.xml';
    const pathXmlFile = path.join(__dirname, `../XML/${filename}`);
    const file = fs.readFileSync(pathXmlFile);
    const jsonifyXml = xmlToJson(file);
    
    const fileDb = await createFileDb();
    const fileId = fileDb?._id.toString();

    if (fileId) {
      console.log(fileId);
      saveJsonifyXmlToDb(jsonifyXml.practiceTransfer, fileId)
    } else {
      console.log("File not created");
    }
})()


function createFileDb() {
  return File.create({
    path: "path",
    name: "name",
    type: "type"
  });
}


