import {Entity, List} from './'

interface FinancialYearProps {
  fileId: string;
  objectId?: string;
  name?: string;
  startDate?: string;
  endDate?: string;
  state?: number;
}

export interface FinancialYear extends Entity, FinancialYearProps {}

export interface FinancialYearList extends List<FinancialYear> { }
