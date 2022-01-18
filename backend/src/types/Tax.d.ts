import {Entity, List} from './'

export interface TaxList extends List<Tax> {}

export interface Tax extends Entity, TaxProps {}

interface TaxProps {
  fileId: string;
  objectId?: string;
  code?: string;
  rate?: number;
  vatDeductible?: string;
}
