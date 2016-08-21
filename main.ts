import { FtpClient } from './app/services/FtpClient';
const cert = require('windows-certs');
/**
 * Steps:
 * Get all folders in FTPS
 * Get children for all folders
 * Get DownloadSpec obj from DownloadMultipleItems
 * Assign unique GUID to each
 * Assemble BLOB filename with parent folder name + / + filename
 * Import into Azure
 * Delete file from FTP
 * 
 **/
module Program {
    async function main() {
        'use strict';
        cert.get({
                storeName: 'CertificateAuthority',
                storeLocation: 'LocalMachine'
            }, function (err: any, certs: any) {
                console.log(certs);
            });
        //await FtpClient.ProcessNewFiles();
    }

    main();
}