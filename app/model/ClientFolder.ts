import { ClientFile } from '../model/ClientFile'

export class ClientFolder {
    public Name: string;
    public Id: string;
    public Children: ClientFile[];
}