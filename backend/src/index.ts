import fs from "fs";
import path from 'path'
import { initDatabase } from "./connectors/mongodb";
import { xmlToJson } from './xml/parse';
import { printJsonifyXml } from "./utils/printJsonifyXml";
import {
    Account,
    Bank,
    Contact,
    Company,
    Financial_Year,
    Capital_Asset,
    Journal,
    Tax,
  } from "./models";


(async()=>{
    await initDatabase()
   
    const filename = 'littlexml.xml';
    const pathXmlFile = path.join(__dirname, `../${filename}`);
    const file = fs.readFileSync(pathXmlFile);
    const jsonifyXml = xmlToJson(file);
    printJsonifyXml(jsonifyXml , 0, 5, true)
})()