import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import {BulmaFooterModule} from 'ngx-bulma';
import { MarkdownModule } from 'ngx-markdown';
import { FooterRoutingModule } from './footer-routing.module';
import {FooterComponent} from './footer.component';

@NgModule({
  declarations: [FooterComponent],
  imports: [
    CommonModule,
    FooterRoutingModule,
    BulmaFooterModule,
    MarkdownModule.forRoot({ loader: HttpClient })
  ],
  exports: [FooterComponent]
})
export class FooterModule { }
