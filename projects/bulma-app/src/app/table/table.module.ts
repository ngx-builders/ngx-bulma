import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { BulmaTableModule } from '@ngx-builders/ngx-bulma/table';
import { MarkdownModule } from 'ngx-markdown';
import { TableRoutingModule } from './table-routing.module';
import { TableComponent } from './table.component';

@NgModule({
  declarations: [TableComponent],
  imports: [
    CommonModule,
    TableRoutingModule,
    BulmaTableModule,
    MarkdownModule.forRoot({ loader: HttpClient }),
  ],
})
export class TableModule {}
