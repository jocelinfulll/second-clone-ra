import fs from "fs";
import path from 'path'
import { File } from "./models"
import { xmlToJson } from './xml/parse';
import { saveJsonifyXmlToDb } from './xml/';
import { downloadFileFromS3 } from "./utils/fileS3";

export const writePivotFile = async (fileId) => {
   try {
      const fileDB = await File.findById(fileId);

      let filePath = fileDB["path"];
      let fileName: string = fileDB["name"];

      if (!filePath || !fileName) {
        throw Error("Path/Name not found in file from DB");
      }

      const BodyXML = await downloadFileFromS3({fileName});
      const parsedXML = xmlToJson(BodyXML);

      saveJsonifyXmlToDb(parsedXML, fileId);
    } catch(e) {
        throw("File not found in DB");
    }
};
