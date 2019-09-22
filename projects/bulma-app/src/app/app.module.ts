import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {
  BulmaBreadcrumbModule, BulmaCardModule,
  BulmaMenuModule, BulmaModalModule,
  BulmaNavModule, BulmaPanelModule, BulmaTabsModule
} from 'ngx-bulma';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BulmaBreadcrumbModule,
    BulmaCardModule,
    BulmaMenuModule, BulmaModalModule,
    BulmaNavModule, BulmaPanelModule,
    BulmaTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
