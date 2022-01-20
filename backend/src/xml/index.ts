import { chunk as _chunk, get as _get, once as _once } from "lodash";
import {
  Account,
  Bank,
  Contact,
  Company,
  Financial_Year,
  Capital_Asset,
  Journal,
  Tax,
} from "../models";

import { adapters } from "./tables";

export const saveJsonifyXmlToDb = (file, fileId) =>{
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
  // console.log(Object.keys(file).sort((a, b) => a.localeCompare(b)));

  for (let [dbKey, xmlKey] of focus) {
    const interestingData = ensureIsArray(_get(file, xmlKey, undefined));

    if (!interestingData[0]) { 
      continue 
    }

    switch (dbKey) {
      case "accounts":
        const accounts = interestingData.map(adapters.account);
        accounts.map((account) => Account.create({...account, file_id: fileId}));
        break;
      case "banks":
        const banks = interestingData.map(adapters.bank);
        banks.forEach((bank) => Bank.create({...bank, file_id: fileId}));
        break;
      case "contacts":
        const contacts = interestingData.map(adapters.contact);
        contacts.forEach((contact) => Contact.create({...contact, file_id: fileId}));
        break;
      case "company":
        const companies = interestingData.map(adapters.company);
        companies.forEach((company) => Company.create({...company, file_id: fileId}));
        break;
      case "exercices":
        const exercices = interestingData.map(adapters.financial_year);
        exercices.forEach((fy) => Financial_Year.create({...fy, file_id: fileId}));
        break;
      case "immos":
        const immos = interestingData.map(adapters.capital_asset);
        immos.forEach((immo) => Capital_Asset.create({...immo, file_id: fileId}));
        break;
      case "journals":
        const journals = interestingData.map(adapters.journal);
        journals.forEach((journal) => Journal.create({...journal, file_id: fileId}));
        break;
      case "taxes":
        const taxes = interestingData.map(adapters.tax);
        taxes.forEach((tax) => Tax.create({...tax, file_id: fileId}));
        break;
      default:
        _once(() => console.log(xmlKey));
        break;
    }
  }
}

function ensureIsArray(obj: unknown) {
  return Array.isArray(obj) ? obj : [obj];
}