import { FtpConnection } from '../data/FtpConnection'
import { ClientFile } from '../model/ClientFile'

const querystring = require('querystring');

export class GetChildren {
    public static async execute(parentId: string): Promise<any[]> {
        let connection = new FtpConnection();
        return new Promise<any[]>((resolve, reject) => {
            let params = { 
                includeDeleted: false, 
                '$expand': 'Children', 
                '$select': 'Id,Name,Children,Children/Id,Children/Name' 
            };
            connection.get(`/sf/v3/Items(${parentId})/Children?${querystring.stringify(params)}`)
                .then((data) => {
                    resolve(JSON.parse(data.body));
                }, (data) => {
                    throw new Error(data);
                })
        })
    }
}