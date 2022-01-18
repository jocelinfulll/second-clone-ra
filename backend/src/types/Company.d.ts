import {Entity, List} from './'

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

  export interface Company extends Entity, CompanyProps {}

  export interface CompanyList extends List<Company> { }
