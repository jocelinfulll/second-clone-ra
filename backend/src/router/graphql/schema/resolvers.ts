import {
    Bank as BankModel, 
    Company as CompanyModel, 
    Contact as ContactModel, 
    Account as AccountModel, 
    Financial_Year as FinancialYearModel, 
    Journal as JournalModel, 
    Tax as TaxModel, 
    Recovery as RecoveryModel, 
    Capital_Asset as CapitalAssetModel,
    File as FileModel
} from "../../../models"

import { writePivotFile } from '../../../index';

export const resolvers = {
    Query: {
        async getFileById(_parent, { id }) {
            const file = await FileModel.findById(id);
            return file;
        },
        async getFiles() {
            const files = await FileModel.find({}, null, { sort: { _id : 'asc' }, limit: 40 })
                .lean().exec();
            return files;
        },

        async getAccountById(_parent, { id }) {
            const account = await AccountModel.findById(id);
            return account;
        },
        async getAccountByFileId(_parent, { fileId }) {
            const account = await AccountModel.findOne({file_id: fileId});
            return account;
        },
        async getAccounts() {
            const accounts = await AccountModel.find({}, null, { sort: { _id : 'asc' }, limit: 40 })
                .lean().exec();
            return accounts;
        },

        async getBankById(_parent, { id }) {
            const bank = await BankModel.findById(id);
            return bank;
        },
        async getBankByFileId(_parent, { fileId }) {
            console.log(fileId)
            const bank = await BankModel.findOne({file_id: fileId});
            return bank;
        },
        async getBanks() {
            const banks = await BankModel.find({}, null, { sort: { _id : 'asc' }, limit: 40 })
                .lean().exec();
            return banks;
        },

        async getCompanyById(_parent, { id }) {
            console.log(id)
            const company = await CompanyModel.findById(id);
            console.log(company)
            return company;
        },
        async getCompanyByFileId(_parent, { fileId }) {
            console.log(fileId)
            const company = await CompanyModel.findOne({file_id: fileId});
            return company;
        },
        async getCompanies() {
            const companies = await CompanyModel.find({}, null, { sort: { _id : 'asc' }, limit: 40 })
                .lean().exec();
            return companies;
        },

        async getFinancialYearById(_parent, { id }) {
            const fy = await FinancialYearModel.findById(id);
            return fy;
        },
        async getFinancialYearByFileId(_parent, { fileId }) {
            const fy = await FinancialYearModel.findOne({file_id: fileId});
            return fy;
        },
        async getFinancialYears() {
            const fys = await FinancialYearModel.find({}, null, { sort: { _id : 'asc' }, limit: 40 })
                .lean().exec();
            return fys;
        },

        async getJournalById(_parent, { id }) {
            const journal = await JournalModel.findById(id);
            return journal;
        },
        async getJournalByFileId(_parent, { fileId }) {
            const journal = await JournalModel.findOne({file_id: fileId});
            return journal;
        },
        async getJournals() {
            const journals = await JournalModel.find({}, null, { sort: { _id : 'asc' }, limit: 40 })
                .lean().exec();
            return journals;
        },

        async getTaxById(_parent, { id }) {
            const tax = await TaxModel.findById(id);
            return tax;
        },
        async getTaxByFileId(_parent, { fileId }) {
            const tax = await TaxModel.findOne({file_id: fileId});
            return tax;
        },
        async getTaxes() {
            const taxes = await TaxModel.find({}, null, { sort: { _id : 'asc' }, limit: 40 })
                .lean().exec();
            return taxes;
        },

        async getCapitalAssetById(_parent, { id }) {
            const ca = await CapitalAssetModel.findById(id);
            return ca;
        },
        async getCapitalAssetByFileId(_parent, { fileId }) {
            const ca = await CapitalAssetModel.findOne({file_id: fileId});
            return ca;
        },
        async getCapitalAssets() {
            const cas = await CapitalAssetModel.find({}, null, { sort: { _id : 'asc' }, limit: 40 })
                .lean().exec();
            return cas;
        },

        async getContactById(_parent, { id }) {
            const contact = await ContactModel.findById(id);
            return contact;
        },
        async getContactByFileId(_parent, { fileId }) {
            const contact = await ContactModel.findOne({file_id: fileId});
            return contact;
        },
        async getContacts() {
            const contacts = await ContactModel.find({}, null, { sort: { _id : 'asc' }, limit: 40 })
                .lean().exec();
            return contacts;
        },

        /*async getRecoveryById(_parent, { id }) {
            const ca = await CapitalAssetModel.findById(id);
            return ca;
        },
        async getRecoveryFileId(_parent, { fileId }) {
            const ca = await CapitalAssetModel.findOne({file_id: fileId});
            return ca;
        },*/
    },

    Mutation: {
        async writeSavePivotFile(_parent, { input }) {
            try {
                const fileId = input.fileId;
                await writePivotFile(fileId)
                return input;
            } catch(e) {
                return {
                    response: JSON.stringify(e)
                };
            }
            
        }
    },

    /* Object iDs ?*/
    Account: {
        id: parent => parent._id,
        fileId: parent => parent.file_id,
        objectId: parent => parent.object_id,
        number: parent => parent.number,
        name: parent => parent.name,
        shortName: parent => parent.short_name,
        type: parent => parent.type,
        category: parent => parent.category,
        natureAuxi: parent => parent.nature_auxi,
        sens: parent => parent.sens,
        // TPBase: parent => parent.tp_base, TP base ?
        depreciable: parent => parent.depreciable,
        method: parent => parent.method,
        // endowment: parent => parent._id, endowment ?
        length: parent => parent.length,
        vatIntraCom: parent => parent.vat_intra_com,
        inputEntryCutOff: parent => parent.input_entry_cut_off,
        createdAt: parent => parent.createdAt
    },

    Bank: {
        id: parent => parent._id,
        fileId: parent => parent.file_id,
        objectId: parent => parent.object_id,
        ibanCode: parent => parent.iban_code, // iban Code ?
        codeSwift: parent => parent.code_swift,
        branchCode: parent => parent.branch_code,
        bankName: parent => parent.bank_name,
        bankCode: parent => parent.bank_code,
        accountType: parent => parent.account_type,
        accountOwner: parent => parent.account_owner,
        accountNumber: parent => parent.account_number,
        accountKey: parent => parent.account_key,
        createdAt: parent => parent.createdAt
    },

    CapitalAsset: {
        id: parent => parent._id,
        fileId: parent => parent.file_id,
        objectId: parent => parent.object_id,
        number: parent => parent.number,
        description: parent => parent.description,
        furtherInfo: parent => parent.further_info,
        initialValue: parent => parent.initial_value,
        initialVATValue: parent => parent.initial_vat_value,
        acquisition: parent => parent.acquisition,
        activation: parent => parent.activation,
        residualValue: parent => parent.residual_value,
        account: parent => parent.account,
        TPtaxable: parent => parent.tp_taxable,
        TPbase: parent => parent.tp_base,
        taxBase: parent => parent.tax_base,
        depreciation: parent => parent.depreciation,
        // endowment: parent => parent.endowment, endowment ?
        depreciable: parent => parent.depreciable,
        depBase: parent => parent.dep_base,
        depMethod: parent => parent.dep_method,
        depLength: parent => parent.dep_length,
        depRate: parent => parent.dep_rate,
        reprise: parent => parent.reprise,
        repriseDate: parent => parent.reprise_date,
        repriseAmount: parent => parent.reprise_amount,
        presence: parent => parent.presence,
        composite: parent => parent.composite,
        decomposed: parent => parent.decomposed,
        mainComponent: parent => parent.main_component,
        quantity: parent => parent.quantity,
        createdAt: parent => parent.createdAt,
    },

    Contact: {
        id: parent => parent._id,
        fileID: parent => parent.file_id,
        objectId: parent => parent.object_id,
        isAssociate: parent => parent.is_associate,
        lastName: parent => parent.last_name,
        firstName: parent => parent.first_name,
        title: parent => parent.title,
        email: parent => parent.email,
        telephone: parent => parent.telephone,
        fax: parent => parent.fax,
        mobile: parent => parent.mobile,
        jobTitle: parent => parent.job_title,
        mainContact: parent => parent.main_contact,
        birthDate: parent => parent.birth_date,
        street: parent => parent.street,
        building: parent => parent.building,
        postCode: parent => parent.post_code,
        town: parent => parent.town,
        country: parent => parent.country,
        birthDepartement: parent => parent.birth_departement,
        birthTown: parent => parent.birth_town,
        numIndice: parent => parent.num_indice,
        sciAssociate: parent => parent.sci_associate,
        createdAt: parent => parent.createdAt
    },

    Company: {
        id: parent => parent._id,
        fileId: parent => parent.file_id,
        objectId: parent => parent.object_id,
        legalName: parent => parent.legal_name,
        usageName: parent => parent.usage_name,
        siren: parent => parent.siren,
        website: parent => parent.website,
        personType: parent => parent.person_type,
        buisnessType: parent => parent.buisness_type,
        monoBranch: parent => parent.mono_branch,
        createdAt: parent => parent.createdAt
    },

    File: {
        id: parent => parent._id,
        path: parent => parent.path,
        name: parent => parent.name,
        type: parent => parent.type,
        createdAt: parent => parent.createdAt
    },

    FinancialYear: {
        id: parent => parent._id,
        fileId: parent => parent.file_id,
        objectId: parent => parent.object_id,
        name: parent => parent.name,
        startDate: parent => parent.start_date,
        endDate: parent => parent.end_date,
        state: parent => parent.state,
        createdAt: parent => parent.createdAt
    },

    Journal: {
        id: parent => parent._id,
        fileId: parent => parent.file_id,
        objectId: parent => parent.object_id,
        showEntryReconciliation: parent => parent.show_entry_reconciliation,
        showEntryAnalysis: parent => parent.show_entry_analysis,
        ref: parent => parent.ref,
        presentInGED: parent => parent.present_in_ged,
        externalGEDFolder: parent => parent.external_ged_folder,
        description: parent => parent.description,
        cumulated: parent => parent.cumulated,
        autoSaveEntry: parent => parent.auto_save_entry,
        type: parent => parent.type,
    },


    Tax: {
        id: parent => parent._id,
        fileId: parent => parent.file_id,
        objectId: parent => parent.object_id,
        // code: parent => parent.type, code ?
        rate: parent => parent.rate,
        vatDeductible: parent => parent.vat_deductible,
        createdAt: parent => parent.createdAt,
    },


}