import {Entity} from './'

export interface Account extends Entity, AccountProps {}

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

export interface Bank extends Entity, BankProps {}

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

  export interface CapitalAsset extends Entity, CapitalAssetProps {}

  interface CapitalAssetProps {
    fileId: string;
    objectId?: string;
    number?: number;
    description?: string;
    furtherInfo?: string;
    initialValue?: number;
    initialVATValue?: number;
    acquisition?: string; // Date
    activation?: string; // Date
    startDate?: string; // Date
    residualValue?: number;
    account?: string;
    TPtaxable?: number;
    TPbase?: number;
    taxBase?: number;
    depreciation?: string;
    endowment?: string; //dotation
    depreciable?: number;
    depBase?: number;
    depMethod?: number;
    depLength?: number;
    depRate?: number;
    reprise?: number; // Boolean
    repriseDate?: string; // Date
    repriseAmount?: number;
    presence?: number; // Boolean
    composite?: number; // Boolean
    decomposed?: number; // Boolean
    mainComponent?: number; // Boolean
    quantity?: number;
  }

  export interface Company extends Entity, CompanyProps {}

  interface CompanyProps {
    fileId: string;
    legalName?: string;
    usageName?: string;
    siren?: string;
    website?: string;
    personType?: string;
    businessType?: string;
    monoBranch?: string;
}
  
export interface Dp extends Entity, DpProps {}

interface DpProps {
  fileId: string;
  accountingParameter?: DpAccountingParameter;
  company?: DpCompany;
  fiscalParameters?: DpFiscalParameters;
  identification?: DpIdentification;
  CVAEParameters?: DpCVAEParameters;
  branches?: DP_branches;
  contacts?: DpContacts;
}


//BIG

export interface Dp extends Entity, DpProps {}

interface DpProps {
  fileId: string;
  accountingParameter?: DpAccountingParameter;
  company?: DpCompany;
  fiscalParameters?: DpFiscalParameters;
  identification?: DpIdentification;
  CVAEParameters?: DpCVAEParameters;
  branches?: DP_branches;
  contacts?: DpContacts;
}

type DpAccountingParameter = {
  genAccountLen: number;
  auxAccountLen: number;
  rateType: number;
  letterAmount: number;
  accountRefType: number;
};

type DpCompanyJuridicalParameters = {
  creationDate: string;
  activityStartDate: string;
  capital: number;
  actionNumber: number;
};

type DpCompany = {
  legalName: string;
  usageName: string;
  SIREN: string;
  webSite?: string;
  personType: number;
  businessType: number;
  monoBranch: number;
  juridicalParameters: DpCompanyJuridicalParameters;
  legalAddress: Address;
};

type DpFiscalParametersOGAParameters = {
  approvedOga: number;
};

type DpFiscalParameters = {
  ediTdfcProcedure: number;
  taxRegime: number;
  taxationRegime: number;
  manageImmo: number;
  OGAParameters: DpFiscalParametersOGAParameters;
};

type DpIdentification = {
  FRP?: string;
  cdiCode?: string;
  serviceCode?: string;
  agreementNumber?: string;
};

type DpCVAEParameters = {
  cvaePayer: number;
  adhesionTelereglement: number;
  bankAccount1: string;
};

type DpBranchesBranchRegistrationTab = {
  RCS: string;
  cityRCS?: string;
  nrRCS?: string;
  dateRCS?: string;
};

type DpBranchesBranch = {
  branch: {
    branchID: string;
    branchType: number;
    NIC: string;
    codeNAF: string;
    legalName: string;
    usageName: string;
    telephone?: string;
    email?: string;
    mainActivity?: string;
    registrationTab: DpBranchesBranchRegistrationTab;
  };
};

type DP_branches = Array<DpBranchesBranch>;

type Address = {
    street?: string;
    building?: string;
    postCode?: string;
    town?: string;
    postalInseeCode?: string;
    country?: string;
  };

  type DpContactsContact = {
    contact: {
      objectID: string;
      isAssociate: number;
      lastName?: string;
      firstName?: string;
      title: string;
      email?: string;
      telephone?: string;
      fax?: string;
      mobile?: string;
      jobTitle: string;
      mainContact: number;
      address: Address;
    };
  };
  type DpContacts = Array<DpContactsContact>;

//BIG
//END


export interface FinancialYear extends Entity, FinancialYearProps {}

interface FinancialYearProps {
  fileId: string;
  objectId?: string;
  name?: string;
  startDate?: string;
  endDate?: string;
  state?: number;
}


export interface GenericInfo extends Entity, GenericInfoProps {}

interface GenericInfoProps {
  userId?: string;
  practiceId?: string;
  rrhId?: string;
  transactionId?: string;
  sessionId?: string;
  domainKey?: string;
  companyId?: string;
  companyCode?: string;
  companyName?: string;
  inexCode?: string;
  siteId?: string;
  platformAccounting?: number;
  platformImmo?: number;
  platformPay?: number;
  platformAccountingType?: number;
  fileId: string;
}

export interface Journal extends Entity, JournalProps {}
interface JournalProps {
  fileId: string;
  objectId?: string;
  ref?: string;
  description?: string;
  type?: number;
  autoSaveEntry?: number;
  showEntryReconciliation?: number;
  showEntryAnalysis?: number;
  presentInGed?: number;
  externalGEDFolder?: string;
  cumulated?: number;
}



export interface Tax extends Entity, TaxProps {}
interface TaxProps {
  fileId: string;
  objectId?: string;
  code?: string;
  rate?: number;
  vatDeductible?: string;
}



export interface Contact extends Entity, ContactProps {}
interface ContactProps {
  fileId: string;
  objectId?: string;
  isAssociate?: number;
  lastName?: string;
  firstName?: string;
  title?: string;
  email?: string;
  telephone?: string;
  fax?: string;
  mobile?: string;
  jobTitle?: string;
  mainContact?: number;
  birthDate?: string;
  street?: string;
  building?: string;
  postCode?: string;
  town?: string;
  country?: string;
  birthDepartement?: number;
  birthTown?: string;
  numIndice?: number;
  sciAssociate?: number;
}
