import { XMLParser } from "fast-xml-parser";
import * as iconv from 'iconv-lite';



const parser = new XMLParser();

export const xmlToJson = (BodyXML:any) =>{
    

    // we forced type here because s3 can return a lot of type but in our case It always return a Buffer
    const encodedXml = iconv.decode(BodyXML as Buffer, 'win1250');
    const encodeXmlAsBufferToUtf8 = iconv.encode(encodedXml, 'utf8');

    const parserXML = new XMLParser();
    return parserXML.parse(encodeXmlAsBufferToUtf8.toString()).practiceTransfer;
}
