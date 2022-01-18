import { Message_store } from "../models";
import { v4 as uuidv4 } from "uuid";
export const savePivotFile = async ({ message_id }) => {
  const {
    meta_data,
    data: { file_id, ...rest },
  } = await Message_store.findById(message_id);
  const streamName = `pivotFile-${file_id}`;
  const args = { id: file_id, ...rest }
  console.log("rest", rest)
  // const pivotFile = {
  //   errors: [],
  //   id: entityProps.id ?? uuidv4(),
  //   createdAt: entityProps.createdAt ?? new Date().toISOString(),
  //   equals:(b)=>{ return isEqual(this, b); }
  //   name: name,
  //   path: path,
  //   type: type,
  //   userId: userId,
  //   recoveries: props.recoveries ?? RecoveryListFactory.create([])
  //   accountList: accountList ?? AccountListFactory.create([]),
  //   bankList: bankList ?? BankListFactory.create([]),
  //   capitalAssetList: capitalAssetList ?? CapitalAssetListFactory.create([]),
  //   companyList: companyList ?? CompanyListFactory.create([]),
  //   dpList: dpList ?? DpListFactory.create([]),
  //   financialYearList: financialYearList ?? FinancialYearListFactory.create([]),
  //   genericInfoList: genericInfoList ?? GenericInfoListFactory.create([]),
  //   journalList: journalList ?? JournalListFactory.create([]),
  //   taxList: taxList ?? TaxListFactory.create([]),
  //   contactList: contactList ?? ContactListFactory.create([]),
  // };

    await Message_store.create({
        id: uuidv4(),
        stream_name: streamName,
        type:"pivot_file_saved",
        meta_data: {
            user_id: meta_data.user_id,
            file_id: meta_data.file_id
        },
        
    })
};
