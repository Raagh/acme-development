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
        this.apiService.requestQuote(this.name, this.mail, this.message).subscribe((quoteResult) => {
            quoteResult && console.log("The quote has been sent");
        });
    }

}
