import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './components/app.component';
import { ServicesComponent } from './components/services/services.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { NavComponent } from './components/shared/nav/nav.component';
import { NewsletterComponent } from './components/shared/newsletter/newsletter.component';
import { BoxComponent } from './components/shared/box/box.component';

@NgModule({
  declarations: [
    AppComponent,
    ServicesComponent,
    AboutComponent,
    HomeComponent,
    NavComponent,
    NewsletterComponent,
    BoxComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
