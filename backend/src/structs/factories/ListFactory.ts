import {CapitalAsset, Company, Dp, FinancialYear,
   Entity, List, Account, Bank , Contact, Tax, Journal, GenericInfo} from "../../types";

export namespace ListFactory {
  export function create<E extends Entity>(items?: E[]): List<E> {
    const news: E[] = [];
    const initials = items ? items : [];

    function isNewItem(item: E): boolean {
      return news.filter((v) => compareItems(item, v)).length !== 0;
    }

    function isInitialItem(item: E): boolean {
      return initials.filter((v) => compareItems(item, v)).length !== 0;
    }

    function compareItems(a: E, b: E): boolean {
      return a.equals(b);
    }

    return {
      add: function (item) {
        if (!isNewItem(item)) {
          news.push(item);
        }
        if (!isInitialItem(item)) {
          initials.push(item);
        }
      },

      getNewItems: function () {
        return news;
      },
    };
  }
}

export interface AccountList extends List<Account> {}

export namespace AccountListFactory {
  export function create(accounts?: Account[]): AccountList {
    return ListFactory.create(accounts);
  }
}

export namespace BankListFactory {
  export function create(banks?: Bank[]): BankList {
    return {
      ...ListFactory.create(banks)
    };
  }
}

export interface BankList extends List<Bank> { }


export namespace CapitalAssetListFactory {
  export function create(capitalAssets: CapitalAsset[]): CapitalAssetList {
    return {
      ...ListFactory.create(capitalAssets)
    };
  }
}
export interface CapitalAssetList extends List<CapitalAsset> { }


export namespace CompanyListFactory {
  export function create(companies?: Company[]): CompanyList {
    return {
      ...ListFactory.create(companies)
    };
  }
}

export interface CompanyList extends List<Company> { }

export namespace DpListFactory {
  export function create(dp?: Dp[]): DpList {
    return { ...ListFactory.create(dp) };
  }
}
export interface DpList extends List<Dp> { }

export namespace FinancialYearListFactory {
  export function create(financialYears: FinancialYear[]): FinancialYearList {
    return { ...ListFactory.create(financialYears) };
  }
}

export interface FinancialYearList extends List<FinancialYear> { }


export namespace GenericInfoListFactory {
  export function create(genericInfos: GenericInfo[]): GenericInfoList {
    return ListFactory.create(genericInfos);
  }
}

export interface GenericInfoList extends List<GenericInfo> {}

export namespace JournalListFactory {
  export function create(journals: Journal[]): JournalList {
    return ListFactory.create(journals);
  }
}
export interface JournalList extends List<Journal> {}


export namespace TaxListFactory {
  export function create(taxes: Tax[]): TaxList {
    return ListFactory.create(taxes);
  }
}

export interface TaxList extends List<Tax> {}
export namespace ContactListFactory {
  export function create(contacts: Contact[]): ContactList {
    return {
      ...ListFactory.create(contacts)
    };
  }
}
export interface ContactList extends List<Contact> {}
