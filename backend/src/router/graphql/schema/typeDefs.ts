import gql from 'graphql-tag';


export const typeDefs = gql`

    type Account {
        id:ID!
        fileId:ID
        objectId:String
        number:String
        name:String
        shortName:String
        type:Int
        category:Int
        natureAuxi:Int
        sens:Int
        TPBase:Int
        depreciable:Int
        method:Int
        endowment:String
        length:Int
        vatIntraCom:Int
        inputEntryCutOff:Int
        createdAt:String
    }

    type Bank {
        id: ID!
        fileId: ID
        objectId:String
        accountOwner: String
        bankName: String
        accountType: Int
        bankCode: String
        branchCode: String
        accountNumber: String
        accountKey: String
        ibanCode: String
        codeSwift: String
        createdAt: String
    }

    type CapitalAsset {
        id:ID!
        fileId:ID
        objectId:String
        number:Int
        description:String
        furtherInfo:String
        initialValue:Float
        initialVATValue:Float
        acquisition:String
        activation:String
        residualValue:String
        account:String
        TPtaxable:Int
        TPbase:Int
        taxBase:Float
        depreciation:String
        endowment:String
        depreciable:Int
        depBase:Float
        depMethod:Float
        depLength:Float
        depRate:Float
        reprise:Int
        repriseDate:String
        repriseAmount:Float
        presence:Int
        composite:Int
        decomposed:Int
        mainComponent:Int
        quantity:Int
        createdAt:String
    }

    type Contact {
        id:ID!
        fileID:ID
        objectId:String
        isAssociate:Boolean
        lastName:String
        firstName:String
        title:String
        email:String
        telephone:String
        fax:String
        mobile:String
        jobTitle:String
        mainContact:Int
        birthDate:String
        street:String
        building:String
        postCode:String
        town:String
        country:String
        birthDepartement:Int
        birthTown:String
        numIndice:Int
        sciAssociate:Boolean
        createdAt:String
    }

    type Company {
        id:ID!
        fileId:ID
        objectId:String
        legalName:String
        usageName:String
        siren:String
        website:String
        personType:String
        buisnessType:String 
        monoBranch:String
        createdAt:String
    }

    type File {
        id: ID!
        path: String,
        name: String,
        type: String,
        createdAt: String
    }

    type FinancialYear {
        id:ID!
        fileId:ID
        objectId:String
        name:String
        startDate:String
        endDate:String
        state:Int
        createdAt:String
    }

    type Journal {
        id:ID!
        fileId:ID
        objectId:String
        ref:String
        description:String
        type:Int
        autoSaveEntry:Int
        showEntryReconciliation:Int
        showEntryAnalysis:Int
        externalGEDFolder:String
        presentInGED:Int
        cumulated:Int
        createdAt:String
    }

    type Tax {
        id:ID!
        fileId:ID
        objectId:String
        code:String
        rate:Float
        vatDeductible:String
        createdAt:String
    }

    type Query {
        getFileById(id: String): File
        getFiles: [File]
        getAccountById(id: String): Account
        getAccountByFileId(id: String): Account
        getAccounts: [Account]
        getBankById(id: String): Bank
        getBankByFileId(fileId: String): Bank
        getBanks: [Bank]
        getCompanyById(id: String): Company
        getCompanyByFileId(fileId: String): Company
        getCompanies: [Company]
        getFinancialYearById(id: String): FinancialYear
        getFinancialYearByFileId(fileId: String): FinancialYear
        getFinancialYears: [FinancialYear]
        getJournalById(id: String): Journal
        getJournalByFileId(fileId: String): Journal
        getJournals: [Journal]
        getTaxById(id: String): Tax
        getTaxByFileId(fileId: String): Tax
        getTaxes: [Tax]
        getCapitalAssetById(id: String): CapitalAsset
        getCapitalAssetByFileId(fileId: String): CapitalAsset
        getCapitalAssets: [CapitalAsset]
        getContactById(id: String): Contact
        getContactByFileId(fileId: String): Contact
        getContacts: [Contact]
    }

    input WriteSavePivotFileInputType {
        fileId: String
    }

    type WriteSavePivotFileResponseType {
        response: String
    }

    type Mutation {
        writeSavePivotFile(input: WriteSavePivotFileInputType): WriteSavePivotFileResponseType
    }

`