import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import {BulmaMessageModule} from 'ngx-bulma';
import { MarkdownModule } from 'ngx-markdown';
import { MessageRoutingModule } from './message-routing.module';
import {MessageComponent} from './message.component';

@NgModule({
  declarations: [MessageComponent],
  imports: [
    CommonModule,
    MessageRoutingModule,
    BulmaMessageModule,
    MarkdownModule.forRoot({ loader: HttpClient })
  ],
  exports: [MessageComponent]
})
export class MessageModule { }
