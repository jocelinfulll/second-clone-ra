import { Entity, List } from './'

export interface ContactList extends List<Contact> {}

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