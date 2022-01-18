export interface Account extends Entity, AccountProps {}

export interface AccountList extends List<Account> {}

interface AccountProps {
    fileId: string;
    objectId?: string;
    number?: string;
    name?: string;
    shortName?: string;
    type?: number;
    category?: number;
    natureAuxi?: number;
    sens?: number;
    depreciable?: number;
    method?: number;
    length?: number;
    vatIntraCom?: number;
    inputEntryCutOff?: number;
  }