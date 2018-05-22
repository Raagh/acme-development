import { Injectable } from '@angular/core';
import { Config } from '../../config.js';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  private httpClient: HttpClient;

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  Subscribe(mail: string): boolean {


    return true;
  }

  RequestQuote(name: string, mail: string, message: string): boolean {

    return true;
  }

}
