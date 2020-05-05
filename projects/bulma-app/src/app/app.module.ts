import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {
  BulmaBreadcrumbModule,
  BulmaCardModule,
  BulmaNavbarModule,
} from 'ngx-bulma';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ScrollerComponent } from './scroller/scroller.component';



@NgModule({
  declarations: [
    AppComponent,
    ScrollerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BulmaBreadcrumbModule,
    BulmaCardModule,

    BulmaNavbarModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [

   ScrollerComponent
  ]
})
export class AppModule { }
