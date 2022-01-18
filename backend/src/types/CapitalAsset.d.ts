import {Entity, List} from './'

interface CapitalAssetProps {
    fileId: string;
    objectId?: string;
    number?: number;
    description?: string;
    furtherInfo?: string;
    initialValue?: number;
    initialVATValue?: number;
    acquisition?: string; // Date
    activation?: string; // Date
    startDate?: string; // Date
    residualValue?: number;
    account?: string;
    TPtaxable?: number;
    TPbase?: number;
    taxBase?: number;
    depreciation?: string;
    endowment?: string; //dotation
    depreciable?: number;
    depBase?: number;
    depMethod?: number;
    depLength?: number;
    depRate?: number;
    reprise?: number; // Boolean
    repriseDate?: string; // Date
    repriseAmount?: number;
    presence?: number; // Boolean
    composite?: number; // Boolean
    decomposed?: number; // Boolean
    mainComponent?: number; // Boolean
    quantity?: number;
  }

  export interface CapitalAsset extends Entity, CapitalAssetProps {}

  export interface CapitalAssetList extends List<CapitalAsset> { }


  
