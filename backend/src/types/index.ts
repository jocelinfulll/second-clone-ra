
import {EntityErrors} from './AppErrorClass'


export interface List<E> {
    add: (item: E) => void;
    getNewItems: () => E[];
}
  


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



export interface Entity {
  errors: EntityErrors[];
  id: string;
  createdAt: string;
  equals: (b?: Entity) => boolean;
}
