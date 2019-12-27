import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope, faKey } from '@fortawesome/free-solid-svg-icons';
import { MarkdownModule, MarkedOptions } from 'ngx-markdown';


import {
  BulmaBreadcrumbModule, BulmaButtonModule,
  BulmaCardModule, BulmaInputModule,
  BulmaMenuModule, BulmaMessageModule, BulmaModalModule,
  BulmaNavbarModule, BulmaPanelModule, BulmaTabsModule,
  BulmaTextareaModule
} from 'ngx-bulma';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './button/button.component';
import { CardComponent } from './card/card.component';
import { GettingstartedComponent } from './gettingstarted/gettingstarted.component';
import { HomeComponent } from './home/home.component';
import { InputComponent } from './input/input.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { MenuComponent } from './menu/menu.component';
import { MessageComponent } from './message/message.component';
import { ModelComponent } from './model/model.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PanelComponent } from './panel/panel.component';
import { TabComponent } from './tab/tab.component';
import { TextareaComponent } from './textarea/textarea.component';


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
    InputComponent,
    TextareaComponent
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
    BulmaTextareaModule,
    MarkdownModule.forRoot({ loader: HttpClient })
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [ButtonComponent, InputComponent, TextareaComponent]
})
export class AppModule { }
