import {v4 as uuidv4} from 'uuid'

export type EntityErrors = AppError;

export enum RootAggregatName {
    PIVOT_FILE = 'pivotFile'
}

export enum AggregatName {
    ACCOUNT = 'account',
    BANK = 'bank',
    CAPITAL_ASSET = 'capitalAsset',
    COMPANY = 'company',
    DP = 'dp',
    FINANCIAL_YEAR = 'financialYear',
    GENERIC_INFO = 'genericInfo',
    JOURNAL = 'journal',
    TAX = 'tax',
    CONTACT = 'contact'
}


//TODO: make a AppError interface - and a class (separate)

export  class AppError extends Error {
    id: string;
    domainId?: string;
    createdAt: string;
  
    field?: string;
    domain?: {};
    fileId: string;
  
    constructor({
      message,
      id,
      createdAt,
      name,
      field,
      domain,
      fileId,
      domainId,
    }: {
      message?: string;
      id?: string;
      createdAt?: string;
      name: string; // Cannot "override" the type of a parent property.
      field?: string;
      domain?: RootAggregatName | AggregatName;
      fileId: string;
      domainId?: string;
    }){
      super(message);
      this.name = name;
      this.domainId = domainId;
  
      this.id = id ? id : uuidv4();
  
      this.createdAt = createdAt ?? new Date().toISOString();
  
      this.field = field;
      this.domain = domain;
      this.fileId = fileId;
  
      Error.captureStackTrace(this, this.constructor);
      Object.setPrototypeOf(this, AppError.prototype);
    }
  }