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

import { adapters } from "./tables";

export const saveJsonifyXmlToDb = (file) =>{
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

  for (let foc in focus) {
    const interestingData = ensureIsArray(_get(file, focus[foc][1], undefined));
    console.log("..",interestingData);

    if (!interestingData[0]) { 
      continue 
    }

    switch (focus[foc][0]) {
      case "accounts":
        const accounts = interestingData.map(adapters.account);
        accounts.map((account) => {
          _once(() => console.log(account));
          checkDefinedAndCreate(Account, account);
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
        const companies = interestingData.map(adapters.company);
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
        taxes.forEach((tax) => Tax.create({...tax}));
        break;
      default:
        _once(() => console.log(foc));
        break;
    }
  }
}

function ensureIsArray(obj: unknown) {
  return Array.isArray(obj) ? obj : [obj];
}

function checkDefinedAndCreate(field, array) {
  field.create({...array});
}