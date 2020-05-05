import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import {BulmaTextareaModule} from 'ngx-bulma';
import { MarkdownModule } from 'ngx-markdown';
import { TextareaRoutingModule } from './textarea-routing.module';
import {TextareaComponent} from './textarea.component';

@NgModule({
  declarations: [TextareaComponent],
  imports: [
    CommonModule,
    TextareaRoutingModule,
    BulmaTextareaModule,
    MarkdownModule.forRoot({ loader: HttpClient })
  ],
  exports: [TextareaComponent]
})
export class TextareaModule { }
