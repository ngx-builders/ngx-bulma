import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import {
  BulmaBreadcrumbModule, BulmaCardModule,
  BulmaMenuModule, BulmaModalModule,
  BulmaNavModule, BulmaPanelModule, BulmaTabsModule,DropdownModule
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
    BulmaTabsModule,DropdownModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
