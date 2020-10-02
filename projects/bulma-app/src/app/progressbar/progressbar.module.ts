import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BulmaProgressbarModule } from '@ngx-builders/ngx-bulma/progressbar';
import { MarkdownModule } from 'ngx-markdown';
import { ProgressbarRoutingModule } from './progressbar-routing.module';
import { ProgressbarComponent } from './progressbar.component';

@NgModule({
  declarations: [ProgressbarComponent],
  imports: [
    CommonModule,
    ProgressbarRoutingModule,
    BulmaProgressbarModule,
    MarkdownModule.forRoot({ loader: HttpClient }),
  ],
  exports: [ProgressbarComponent],
})
export class ProgressbarModule {}
