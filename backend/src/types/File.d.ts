import { List} from './'

export interface FileProps {
    name: string;
    path: string;
    type: FileType;
    userId: string;
    recoveries?: RecoveryList;
}

export interface File extends Entity, Required<FileProps> {}
