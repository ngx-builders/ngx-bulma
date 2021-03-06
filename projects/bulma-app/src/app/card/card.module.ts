import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BulmaCardModule } from '@ngx-builders/ngx-bulma/card';
import { MarkdownModule } from 'ngx-markdown';
import { CardRoutingModule } from './card-routing.module';
import { CardComponent } from './card.component';

@NgModule({
  declarations: [CardComponent],
  imports: [
    CommonModule,
    CardRoutingModule,
    BulmaCardModule,
    MarkdownModule.forRoot({ loader: HttpClient }),
  ],
  exports: [CardComponent],
})
export class CardModule {}
