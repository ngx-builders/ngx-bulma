import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BulmaInputModule } from '@ngx-builders/ngx-bulma/input';
import { MarkdownModule } from 'ngx-markdown';
import { InputRoutingModule } from './input-routing.module';
import { InputComponent } from './input.component';

@NgModule({
  declarations: [InputComponent],
  imports: [
    CommonModule,
    InputRoutingModule,
    BulmaInputModule,
    MarkdownModule.forRoot({ loader: HttpClient }),
  ],
  exports: [InputComponent],
})
export class InputModule {}
