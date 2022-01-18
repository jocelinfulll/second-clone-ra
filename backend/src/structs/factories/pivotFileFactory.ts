import { FileFactory } from "./FileFactory";
import {
  AccountListFactory,
  BankListFactory,
  CapitalAssetListFactory,
  CompanyListFactory,
  DpListFactory,
  FinancialYearListFactory,
  GenericInfoListFactory,
  JournalListFactory,
  TaxListFactory,
  ContactListFactory,
} from "./ListFactory";
//
export namespace PivotFileFactory {
  export const create = (props, entityProps) => {
    const file = FileFactory.create(
      {
        name: props.name,
        path: props.path,
        userId: props.userId,
        type: props.type ?? "pivot",
      },
      entityProps
    );
    const others = {
      accountList: props.accountList ?? AccountListFactory.create([]),
      bankList: props.bankList ?? BankListFactory.create([]),
      capitalAssetList:
        props.capitalAssetList ?? CapitalAssetListFactory.create([]),
      companyList: props.companyList ?? CompanyListFactory.create([]),
      dpList: props.dpList ?? DpListFactory.create([]),
      financialYearList:
        props.financialYearList ?? FinancialYearListFactory.create([]),
      genericInfoList:
        props.genericInfoList ?? GenericInfoListFactory.create([]),
      journalList: props.journalList ?? JournalListFactory.create([]),
      taxList: props.taxList ?? TaxListFactory.create([]),
      contactList: props.contactList ?? ContactListFactory.create([]),
    };

    return {
      ...file,
      ...others,
    };
  };
}
