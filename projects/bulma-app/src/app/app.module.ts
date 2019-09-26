import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {
  BreadcrumbModule, CardModule,
  MenuModule, ModalModule,
  NavbarModule, PanelModule, TabsModule, MessageModule
} from 'ngx-bulma';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MessageComponent } from './message/message.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MessageComponent,
    HomeComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BreadcrumbModule,
    CardModule,
    MenuModule, ModalModule,
    NavbarModule, PanelModule,
    TabsModule, MessageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
