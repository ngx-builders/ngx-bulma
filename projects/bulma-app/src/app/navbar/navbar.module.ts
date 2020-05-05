import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import {BulmaNavbarModule} from 'ngx-bulma';
import { MarkdownModule } from 'ngx-markdown';
import { NavbarRoutingModule } from './navbar-routing.module';
import {NavbarComponent} from './navbar.component';

@NgModule({
  declarations: [NavbarComponent],
  imports: [
    CommonModule,
    NavbarRoutingModule,
    BulmaNavbarModule,
    MarkdownModule.forRoot({ loader: HttpClient })
  ],
  exports: [NavbarComponent]
})
export class NavbarModule { }
