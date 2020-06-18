import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BulmaModalModule } from 'ngx-bulma';
import { BulmaButtonModule } from 'ngx-bulma';
import { MarkdownModule } from 'ngx-markdown';
import { ModalRoutingModule } from './modal-routing.module';
import { ModalComponent } from './modal.component';

@NgModule({
  declarations: [ModalComponent],
  imports: [
    CommonModule,
    ModalRoutingModule,
    BulmaModalModule,
    BulmaButtonModule,
    MarkdownModule.forRoot({ loader: HttpClient }),
  ],
  exports: [ModalComponent],
})
export class ModalModule {}
