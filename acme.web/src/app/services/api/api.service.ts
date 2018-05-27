import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConfig } from '../../app.config';
import { Observable } from 'rxjs';

import { MailData } from '../../model/mail-data';

@Injectable({
    providedIn: 'root'
})

export class ApiService {

    private httpClient: HttpClient;
    private appConfig: AppConfig;

    constructor(appConfig: AppConfig, httpClient: HttpClient) {
        this.httpClient = httpClient;
        this.appConfig = appConfig;
    }

    subscribeToMailingList(mail: string): Observable<boolean> {
        const mailData = new MailData(mail);

        return this.httpClient.post<boolean>(this.appConfig.subscribeUrl, mailData);
    }

    requestQuote(name: string, mail: string, message: string): Observable<boolean> {
        const mailData = new MailData(mail, name, message);

        return this.httpClient.post<boolean>(this.appConfig.quoteUrl, mailData);
    }
}
