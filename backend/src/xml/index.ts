// -> fs -> parsing
// -> parsing ->  [account] -> event bulk insert avec data:[{fields}]
// -> event -> pubsub mongo -> insert dans la db -> creeer un message de validation saved

import fs from "fs";
import { XMLParser } from "fast-xml-parser";
import { ObjectId } from "mongodb";
import { chunk as _chunk, get as _get, once as _once } from "lodash";
import {
  Message_store,
  Account,
  Bank,
  Contact,
  Company,
  Financial_Year,
  Capital_Asset,
  Journal,
  Tax,
} from "../models";
import { initDatabase } from "../connectors/mongodb/index";
import { adapters } from "./tables";

(async () => await initDatabase())();
const xml = fs.readFileSync("./littlexml.xml");

const parser = new XMLParser();

const jsonXML = parser.parse(xml);
const practiceTransfer = jsonXML.practiceTransfer;
//console.log(for [key] in  practiceTransfer)
const focus = [
  ["accounts", "accounts.account"],
  ["banks", "banks.bankDetails"],
  ["contacts", "contacts.contact"],
  ["company", "company"],
  ["exercices", "exercices.exercice"],
  ["immos", "immos.immobilisation"],
  ["journals", "journals.journal"],
  ["taxes", "taxes.vat"],
];

console.log(Object.keys(practiceTransfer).sort((a, b) => a.localeCompare(b)));
function ensureIsArray(obj: unknown) {
  return Array.isArray(obj) ? obj : [obj];
}

for (let foc in focus) {
  const interestingData = ensureIsArray(_get(practiceTransfer, focus[foc][1], undefined));
  console.log("..",interestingData);
  switch (focus[foc][0]) {
    case "accounts":
      const accounts = interestingData.map(adapters.account);
      console.log('here \n', accounts)
      console.log(typeof accounts)
    
      console.log(Array.isArray(accounts))
      accounts.map((account) => {
        _once(() => console.log(account));
        Account.create({...account});
      });
      
      break;
    case "banks":
      const banks = interestingData.map(adapters.bank);
      banks.forEach((bank) => Bank.create({...bank}));
      break;
    case "contacts":
      const contacts = interestingData.map(adapters.contact);
      contacts.forEach((contact) => Contact.create({...contact}));
      break;
    case "company":
      const companies = interestingData.map(adapters.bank);
      companies.forEach((company) => Company.create({...company}));
      break;
    case "exercices":
      const exercices = interestingData.map(adapters.financial_year);
      exercices.forEach((fy) => Financial_Year.create({...fy}));
      break;
    case "immos":
      const immos = interestingData.map(adapters.capital_asset);
      immos.forEach((immo) => Capital_Asset.create({...immo}));
      break;
    case "journals":
      const journals = interestingData.map(adapters.journal);
      journals.forEach((journal) => Journal.create({...journal}));
      break;
    case "taxes":
      const taxes = interestingData.map(adapters.tax);
      taxes.forEach((tax_table) => Tax.create({...tax_table}));
      break;
    default:
      _once(() => console.log(foc));
      break;
  }
}

// const accountData = _get(practiceTransfer, tuple[0][1] , undefined);

// accountData.map(async account =>{

// })
