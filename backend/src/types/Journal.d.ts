import {Entity, List} from './'

interface JournalProps {
    fileId: string;
    objectId?: string;
    ref?: string;
    description?: string;
    type?: number;
    autoSaveEntry?: number;
    showEntryReconciliation?: number;
    showEntryAnalysis?: number;
    presentInGed?: number;
    externalGEDFolder?: string;
    cumulated?: number;
}

export interface Journal extends Entity, JournalProps {}


export interface JournalList extends List<Journal> {}
