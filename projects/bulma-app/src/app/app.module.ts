import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MarkdownModule, MarkedOptions } from 'ngx-markdown';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope, faKey } from '@fortawesome/free-solid-svg-icons';


import {
  BulmaBreadcrumbModule, BulmaCardModule,
  BulmaMenuModule, BulmaModalModule,
  BulmaNavbarModule, BulmaPanelModule, BulmaTabsModule,
  BulmaMessageModule, BulmaButtonModule, BulmaInputModule
} from 'ngx-bulma';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MessageComponent } from './message/message.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { CardComponent } from './card/card.component';
import { ModelComponent } from './model/model.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { GettingstartedComponent } from './gettingstarted/gettingstarted.component';
import { PanelComponent } from './panel/panel.component';
import { TabComponent } from './tab/tab.component';
import { ButtonComponent } from './button/button.component';
import { InputComponent } from './input/input.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MessageComponent,
    HomeComponent,
    MenuComponent,
    CardComponent,
    ModelComponent,
    IntroductionComponent,
    GettingstartedComponent,
    PanelComponent,
    TabComponent,
    ButtonComponent,
    InputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BulmaBreadcrumbModule,
    BulmaCardModule,
    BulmaMenuModule, BulmaModalModule,
    BulmaNavbarModule, BulmaPanelModule,
    BulmaTabsModule, BulmaMessageModule,
    HttpClientModule,
    BulmaButtonModule,
    BulmaInputModule,
    MarkdownModule.forRoot({ loader: HttpClient })
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [ButtonComponent, InputComponent]
})
export class AppModule { }
