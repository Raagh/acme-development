import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../services/api/api.service';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  private apiService: ApiService;
  private name: string;
  private mail: string;
  private message: string;

  constructor(apiService: ApiService) {
    this.apiService = apiService;
  }

  ngOnInit() {
  }

  requestQuote() {
    var result = this.apiService.RequestQuote(this.name, this.mail, this.message);

    result && console.log("The quote has been sent");
  }

}
