import {Entity, List} from './' 

interface BankProps {
  fileId: string;
  objectId?: string;
  name?: string;
  accountOwner?: string;
  bankName?: string;
  accountType?: number;
  bankCode?: string;
  branchCode?: string;
  accountNumber?: string;
  accountKey?: string;
  ibanCode?: string;
  codeSWIFT?: string;
}

export interface Bank extends Entity, BankProps {}

export interface BankList extends List<Bank> { }