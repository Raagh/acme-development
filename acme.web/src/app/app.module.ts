import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './components/app.component';
import { ServicesComponent } from './components/views/services/services.component';
import { AboutComponent } from './components/views/about/about.component';
import { HomeComponent } from './components/views/home/home.component';
import { NavComponent } from './components/shared/nav/nav.component';
import { NewsletterComponent } from './components/shared/newsletter/newsletter.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { QuoteComponent } from './components/shared/quote/quote.component';

import { ApiService } from './services/api/api.service';


@NgModule({
  declarations: [
    AppComponent,
    ServicesComponent,
    AboutComponent,
    HomeComponent,
    NavComponent,
    NewsletterComponent,
    FooterComponent,
    QuoteComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})

export class AppModule { }
