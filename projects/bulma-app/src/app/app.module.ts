import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {
  BulmaCardModule,
  BulmaContainerModule,
  BulmaFooterModule,
  BulmaNavbarModule,
} from 'ngx-bulma';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DocFooterComponent } from './footer/doc-footer/doc-footer.component';
import { DocNavbarComponent } from './navbar/doc-navbar/doc-navbar.component';
import { ScrollerComponent } from './scroller/scroller.component';

@NgModule({
  declarations: [
    AppComponent,
    ScrollerComponent,
    DocNavbarComponent,
    DocFooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BulmaCardModule,
    BulmaNavbarModule,
    BulmaFooterModule,
    HttpClientModule,
    BulmaContainerModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [ScrollerComponent, DocNavbarComponent, DocFooterComponent],
})
export class AppModule {}
