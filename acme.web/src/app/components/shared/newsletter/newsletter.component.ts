import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../services/api/api.service';

@Component({
    selector: 'app-newsletter',
    templateUrl: './newsletter.component.html',
    styleUrls: ['./newsletter.component.css']
})

export class NewsletterComponent implements OnInit {

    private apiService: ApiService;
    private mail: string;

    constructor(apiService: ApiService) {
        this.apiService = apiService;
    }

    ngOnInit() {
    }

    subscribe() {
        this.apiService.subscribeToMailingList(this.mail).subscribe((subscribeResult) => {
            subscribeResult && console.log("You have been subscribed to our newsletter");
        });
    }
}
