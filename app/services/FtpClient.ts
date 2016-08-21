import { ClientFile } from '../model/ClientFile'
import { ClientFolder } from '../model/ClientFolder'
import { GetChildren } from '../data/GetChildren'
import { Download } from '../data/Download'
import * as _ from 'lodash';

const stream = require('stream');
const azure = require('azure-storage');

export class FtpClient {
    public static async ProcessNewFiles(): Promise<any> {
        let ftpFolders: ClientFolder[] = await GetChildren.execute('fo1daea3-7047-4345-9f29-9c113c8a3af9')
            .then(
                (folders: any) => {
                    return folders.value;
                });
        
        for (var i = 0; i < ftpFolders.length; i++) {
            var folder = ftpFolders[i];
            for (var f = 0; f < folder.Children.length; f++) {
                var file = folder.Children[f];
                await Download.execute(file.Id)
                            .then(
                                data => {
                                    file.Content = data.body;
                                    //console.log(data);
                                }
                            )
            }
        }


        
        console.log('test');
    }    

    private CreateStream(content: string) {
        var readableStream = stream.Readable;
    }
}