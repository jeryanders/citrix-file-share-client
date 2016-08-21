import { Config } from '../core/Config';
//import { request } from 'request';

const request = require('request');

export class FtpConnection {
    private paths = {
        baseApiUrl: 'https://checkimhere.sf-api.com',
        baseAuthUrl: 'https://checkimhere.sharefile.com/oauth/token'
    }
    
    public getToken() : Promise<any> {
        var config = {
            url: this.paths.baseAuthUrl,
            method: 'POST',
            form: {
                'grant_type': 'password',
                'username': Config.Username,
                'password': Config.Password,
                'client_id': Config.ClientId,
                'client_secret': Config.ClientSecret
            }
        }

        return this.makeRequest(config);
    }

    public get(path: string, form?: {}) : Promise<any> {
        return this.getToken().then(
            (data) => {
                var result = JSON.parse(data.body);
                var config = {
                    url: this.paths.baseApiUrl + path,
                    method: 'GET',
                    auth: {
                        'bearer': result.access_token
                    },
                    form: form
                } 

                return this.makeRequest(config);
            });
    }

    public delete(path: string, form?: {}) : Promise<any> {
        return this.getToken().then(
            (data) => {
                var result = JSON.parse(data.body);
                var config = {
                    url: this.paths.baseApiUrl + path,
                    method: 'DELETE',
                    auth: {
                        'bearer': result.access_token
                    },
                    form: form
                }
                return this.makeRequest(config);
            })
    }

    public post(path: string, params?: {}[]): Promise<any> {
        return this.getToken().then(
            (result) => {
                var config = {
                    url: this.paths.baseApiUrl + path,
                    method: 'POST',
                    auth: {
                        'bearer': result.access_token,
                        'value': 'application/x-www-form-urlencoded'
                    },
                    postData: {
                        params: params
                    }
                }
                return this.makeRequest(config);
            });
    }

    public makeRequest(config: {}) : Promise<any> {
        return new Promise<any>((resolve, reject) => {
            request(config, (err: any, res: any) => {
                if(err) { 
                    reject(err); 
                }
                else {
                    resolve(res);
                } 
            })
        })
    }

    // oauth2 = oauth2(config);
}