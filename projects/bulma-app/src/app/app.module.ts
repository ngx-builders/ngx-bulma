import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {
  BulmaBreadcrumbModule, BulmaCardModule,
  BulmaMenuModule, BulmaModalModule,
  BulmaNavbarModule, BulmaPanelModule, BulmaTabsModule,
  BulmaMessageModule} from 'ngx-bulma';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MessageComponent } from './message/message.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { CardComponent } from './card/card.component';
import { ModelComponent } from './model/model.component';
import { PanelComponent } from './panel/panel.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MessageComponent,
    HomeComponent,
    MenuComponent,
    CardComponent,
    ModelComponent,
    PanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BulmaBreadcrumbModule,
    BulmaCardModule,
    BulmaMenuModule, BulmaModalModule,
    BulmaNavbarModule, BulmaPanelModule,
    BulmaTabsModule, BulmaMessageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
