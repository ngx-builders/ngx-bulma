import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import {BulmaInputModule} from 'ngx-bulma';
import { MarkdownModule } from 'ngx-markdown';
import { InputRoutingModule } from './input-routing.module';
import {InputComponent} from './input.component';

@NgModule({
  declarations: [InputComponent],
  imports: [
    CommonModule,
    InputRoutingModule,
    BulmaInputModule,
    MarkdownModule.forRoot({ loader: HttpClient })
  ],
  exports: [InputComponent]
})
export class InputModule { }
