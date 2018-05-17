import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ServicesComponent } from './components/services/services.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'about', component: AboutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
