import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BulmaButtonModule } from '@ngx-builders/ngx-bulma/button';
import { BulmaModalModule } from '@ngx-builders/ngx-bulma/modal';
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
