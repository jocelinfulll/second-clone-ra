
import fs from "fs";
import path from "path";
import smallUUID from 'short-uuid'

export const splitter = (linesEnd=1,linesOffset=0, name="splited" ) =>{
    const filename = "littlexml.xml";
    const pathXmlFile = path.join(__dirname, `../../XML/${filename}`);
    const file = fs.readFileSync(pathXmlFile);
    const lines = file.toString("utf-8").split("\n");
    const focus = lines.slice(linesOffset,linesEnd );
    const newXMLString = focus.join('\n');
    const newFileName = path.join(__dirname, `../../${name}.xml`)
    fs.writeFile(newFileName, newXMLString, (err) =>console.log(err))
}

splitter(86)