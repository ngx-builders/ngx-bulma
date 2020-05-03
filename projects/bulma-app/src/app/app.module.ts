import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MarkdownModule } from 'ngx-markdown';

import {
  BulmaBreadcrumbModule, BulmaButtonModule,
  BulmaCardModule, BulmaContainerModule,
  BulmaInputModule, BulmaMenuModule, BulmaMessageModule,
  BulmaModalModule, BulmaNavbarModule, BulmaPanelModule,
  BulmaProgressbarModule, BulmaTabsModule, BulmaTextareaModule
} from 'ngx-bulma';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './button/button.component';
import { CardComponent } from './card/card.component';
import { ContainerComponent } from './container/container/container.component';
import { GettingstartedComponent } from './gettingstarted/gettingstarted.component';
import { HomeComponent } from './home/home.component';
import { InputComponent } from './input/input.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { MenuComponent } from './menu/menu.component';
import { MessageComponent } from './message/message.component';
import { ModalComponent } from './modal/modal.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PanelComponent } from './panel/panel.component';
import { ProgressbarComponent } from './progressbar/progressbar.component';
import { ScrollerComponent } from './scroller/scroller.component';
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
    ModalComponent,
    IntroductionComponent,
    GettingstartedComponent,
    PanelComponent,
    TabComponent,
    ButtonComponent,
    InputComponent,
    TextareaComponent,
    ProgressbarComponent,
    ScrollerComponent,
    ContainerComponent
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
    BulmaProgressbarModule,
    BulmaTextareaModule,
    BulmaContainerModule,
    MarkdownModule.forRoot({ loader: HttpClient })
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [ButtonComponent, InputComponent, TextareaComponent, ProgressbarComponent, ScrollerComponent, ContainerComponent]
})
export class AppModule { }
