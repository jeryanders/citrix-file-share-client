import { FtpConnection } from '../data/FtpConnection'
import { ClientFile } from '../model/ClientFile'
import * as _ from 'lodash'


const querystring = require('querystring');

export class Download {
    public static async execute(id: string): Promise<any> {
        var connection = new FtpConnection();
        return new Promise<any>((resolve, reject) => {
            connection.get(`/sf/v3/Items(${id})/Download?includeAllVersions=false`)
                .then((data) => {
                    resolve(data);
                }, (data) => {
                    reject(data);
                })
        })
    }
}