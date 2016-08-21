import { FtpConnection } from '../data/FtpConnection'

export class DeleteItem {
    public static async execute(id: string) {
        var connection = new FtpConnection();
        return new Promise<any>((resolve, reject) => {
            connection.delete(`/sf/v3/Items(${id})?singleversion=false&forceSync=false`)
                .then((data) => {
                    resolve(data);
                }, (data) => {
                    reject(data);
                })
        })
    }
}