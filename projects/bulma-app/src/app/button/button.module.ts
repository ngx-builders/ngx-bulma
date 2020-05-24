import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BulmaButtonModule } from 'ngx-bulma';
import { MarkdownModule } from 'ngx-markdown';
import { ButtonRoutingModule } from './button-routing.module';
import { ButtonComponent } from './button.component';

@NgModule({
  declarations: [ButtonComponent],
  imports: [
    CommonModule,
    BulmaButtonModule,
    ButtonRoutingModule,
    MarkdownModule.forRoot({ loader: HttpClient }),
  ],
  exports: [ButtonComponent],
})
export class ButtonModule {}
