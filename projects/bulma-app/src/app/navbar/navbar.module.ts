import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import {BulmaButtonModule, BulmaNavbarModule} from 'ngx-bulma';
import { MarkdownModule } from 'ngx-markdown';
import { NavbarRoutingModule } from './navbar-routing.module';
import {NavbarComponent} from './navbar.component';

@NgModule({
  declarations: [NavbarComponent],
  imports: [
    CommonModule,
    NavbarRoutingModule,
    BulmaNavbarModule,
    BulmaButtonModule,
    MarkdownModule.forRoot({ loader: HttpClient })
  ],
  exports: [NavbarComponent]
})
export class NavbarModule { }
