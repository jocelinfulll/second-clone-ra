import { Entity, List } from './'

export interface Dp extends Entity, DpProps {}

export interface DpList extends List<Dp> { }

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
