import {Entity, List} from './'

export interface GenericInfoList extends List<GenericInfo> {}

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