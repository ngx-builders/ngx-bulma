import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BulmaBoxModule } from 'ngx-bulma';
import { MarkdownModule } from 'ngx-markdown';
import { BoxRoutingModule } from './box-routing.module';
import { BoxComponent } from './box/box.component';

@NgModule({
  declarations: [BoxComponent],
  imports: [
    CommonModule,
    BoxRoutingModule,
    BulmaBoxModule,
    MarkdownModule.forRoot({ loader: HttpClient }),
  ],
  exports: [BoxComponent],
})
export class BoxModule {}
