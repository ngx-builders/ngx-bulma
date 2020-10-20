import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BulmaButtonModule } from '@ngx-builders/ngx-bulma/button';
import { BulmaTagModule } from '@ngx-builders/ngx-bulma/tag';
import { MarkdownModule } from 'ngx-markdown';
import { TagRoutingModule } from './tag-routing.module';
import { TagComponent } from './tag.component';

@NgModule({
  declarations: [TagComponent],
  imports: [
    CommonModule,
    BulmaButtonModule,
    TagRoutingModule,
    BulmaTagModule,
    MarkdownModule.forRoot({ loader: HttpClient }),
  ],
  exports: [TagComponent],
})
export class TagModule {}
