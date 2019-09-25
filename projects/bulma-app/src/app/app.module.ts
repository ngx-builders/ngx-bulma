import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {
  BulmaBreadcrumbModule, BulmaCardModule,
  BulmaMenuModule, BulmaModalModule,
  BulmaNavModule, BulmaPanelModule, BulmaTabsModule,BulmaMessageModule
} from 'ngx-bulma';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MessageComponent } from './message/message.component';


@NgModule({
  declarations: [
    AppComponent,
    MessageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BulmaBreadcrumbModule,
    BulmaCardModule,
    BulmaMenuModule, BulmaModalModule,
    BulmaNavModule, BulmaPanelModule,
    BulmaTabsModule,BulmaMessageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
