import { ObjectId } from "mongodb";

const account_table = (account) => ({
  object_id: account.objectID,
  file_id: new ObjectId(),
  number: account.number,
  name: account.name,
  short_name: account.shortName,
  type: account.type,
  category: account.category,
  nature_auxi: account.natureAuxi,
  sens: account.sens,
  depreciable: account.depreciable,
  method: account.method,
  length: account.length,
  vat_intra_com: account.vatIntraCom,
  input_entry_cut_off: account.inputEntryCutOff,
});

const bank_table = (bank) => ({
  object_id: bank.objectID,
  file_id: new ObjectId(),
  name: bank.name,
  iban_code: bank.account,
  code_swift: bank.codeSWIFT,
  branch_code: bank.branchCode,
  bank_name: bank.bankName,
  bank_code: bank.bankCode,
  account_type: bank.accountType,
  account_owner: bank.accountOwner,
  account_number: bank.accountNumber,
  account_key: bank.accountKey,
});

const capital_asset_table = (immo) => ({
  object_id: immo.objectID,
  file_id: new ObjectId(),
  quantity: immo.quantity,
  main_component: immo.mainComponent,
  decomposed: immo.decomposed,
  reprise_amount: immo.repriseAmount,
  reprise_date: immo.repriseDate,
  reprise: immo.reprise,
  dep_rate: immo.depRate,
  dep_length: immo.depLength,
  dep_method: immo.depMethod,
  dep_base: immo.depBase,
  depreciable: immo.depreciable,
  depreciation: immo.depreciation,
  tax_base: immo.TaxBase,
  tp_base: immo.TPbase,
  tp_taxable: immo.TPtaxable,
  residual_value: immo.residualValue,
  activation: immo.activation,
  acquisition: immo.acquisition,
  initial_vat_value: immo.initialVATValue,
  initial_value: immo.initialValue,
  further_info: immo.furtherInfo,
  description: immo.description,
  number: immo.number,
  account: immo.immoAccount,
  composite: immo.composite,
  endowment: immo.dotation,
  presence: immo.presence,
  start_date: immo.debut,
});

const company_table = (company) => ({
  file_id: new ObjectId(),
  usage_name: company.usageName,
  siren: company.SIREN,
  website: company.webSite,
  person_type: company.personType,
  business_type: company.businessType,
  mono_branch: company.mono_branch,
});


const contact_table = (contact) => ({
  file_id: new ObjectId(),
  object_id: contact.objectId,
  is_associate: contact.isAssociate,
  last_name: contact.lastName,
  first_name: contact.firstName,
  title: contact.title,
  email: contact.email,
  telephone: contact.telephone,
  fax: contact.fax,
  mobile: contact.mobile,
  job_title: contact.jobTitle,
  main_contact: contact.mainContact,
  birth_date: contact.birthDate,
  street: contact.street,
  building: contact.building,
  post_code: contact.postCode,
  town: contact.town,
  country: contact.country,
  birth_departement: contact.birthDepartement,
  birth_town: contact.birthTown,
  num_indice: contact.numIndice,
  sci_associate: contact.sciAssociate,
});

const financial_year_table = (financial_year) => ({
  file_id: new ObjectId(),
  object_id: financial_year.objectId,
  state: financial_year.state,
  name: financial_year.name,
  start_date: financial_year.startDate,
  end_date: financial_year.endDate,
});

const generic_infos_table = (generic_info) => ({
  file_id: new ObjectId(),
  company_code: generic_info.companyCode,
  company_id: generic_info.companyId,
  company_name: generic_info.companyName,
  domain_key: generic_info.domainKey,
  inex_code: generic_info.inexCode,
  practice_id: generic_info.practiceId,
  platform_accounting: generic_info.fileId,
  platform_immo: generic_info,
  platform_accounting_type: generic_info.platformAccountingType,
  platform_pay: generic_info.platformPay,
  rrh_id: generic_info.rrhId,
  session_id: generic_info.sessionId,
  site_id: generic_info.siteId,
  transaction_id: generic_info,
  user_id: generic_info.userId,
});

const journal_table = (journal) => ({
  object_id: journal.objectID,
  file_id: new ObjectId(),
  show_entry_reconciliation: journal.showEntryReconciliation,
  show_entry_analysis: journal.showEntryAnalysis,
  ref: journal.ref,
  present_in_ged: journal.presentInGed,
  external_ged_folder: journal.externalGEDFolder,
  description: journal.description,
  cumulated: journal.cumulated,
  auto_save_entry: journal.autoSaveEntry,
  type: journal.type,
});

const tax_table = (tax) => ({
  file_id: new ObjectId(),
  object_id: tax.objectID,
  vat_deductible: tax.vatDeductible,
  rate: tax.rate,
  code: tax.cod
});

export const adapters = {
  account: account_table,
  bank: bank_table,
  capital_asset: capital_asset_table,
  company: company_table,
  contact: contact_table,
  financial_year: financial_year_table,
  generic_infos: generic_infos_table,
  journal: journal_table,
  tax: tax_table,
};
