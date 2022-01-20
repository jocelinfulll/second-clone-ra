import { XMLParser } from "fast-xml-parser";


const parser = new XMLParser();

export const xmlToJson = (file:any) =>{
    return parser.parse(file)
}
