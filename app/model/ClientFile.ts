import { ClientFolder } from '../model/ClientFolder'

export class ClientFile {
    CreationDate: Date;
    Id: string;
    Content: string;
    ParentFolderName: string;
    ParentFolderId: string;
    Filename: string;
    BlobFilename: string;
    ParentFolder: ClientFolder;
}