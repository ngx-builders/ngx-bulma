import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import {BulmaModalModule} from 'ngx-bulma';
import { MarkdownModule } from 'ngx-markdown';
import { ModalRoutingModule } from './modal-routing.module';
import {ModalComponent} from './modal.component';

@NgModule({
  declarations: [ModalComponent],
  imports: [
    CommonModule,
    ModalRoutingModule,
    BulmaModalModule,
    MarkdownModule.forRoot({ loader: HttpClient })
  ],
  exports: [ModalComponent]
})
export class ModalModule { }
