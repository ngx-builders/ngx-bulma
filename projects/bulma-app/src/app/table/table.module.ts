import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableRoutingModule } from './table-routing.module';
import { BulmaTableModule } from '@ngx-builders/ngx-bulma/table';
import { MarkdownModule } from 'ngx-markdown';
import { HttpClient } from '@angular/common/http';
import { TableComponent } from './table.component';

@NgModule({
  declarations: [TableComponent],
  imports: [
    CommonModule,
    TableRoutingModule,
    BulmaTableModule,
    MarkdownModule.forRoot({loader: HttpClient})
  ]
})
export class TableModule { }
