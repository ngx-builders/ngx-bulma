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
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';


@NgModule({
  declarations: [
    AppComponent,
    MessageComponent
    HomeComponent,
    MenuComponent
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
