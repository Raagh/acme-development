import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AppConfig {

    public quoteUrl: string;
    public subscribeUrl: string;

    constructor(private http: HttpClient) { }

    load() {
        const jsonFile = `assets/config/config.dev.json`;
        return new Promise<void>((resolve, reject) => {
            this.http.get(jsonFile).toPromise().then((response: Response) => {
                this.quoteUrl = response.json().quoteUrl;
                this.subscribeUrl = response.json().subscribeUrl;
                resolve();
            }).catch((response: any) => {
                reject(`Could not load file '${jsonFile}': ${JSON.stringify(response)}`);
            });
        });
    }
}