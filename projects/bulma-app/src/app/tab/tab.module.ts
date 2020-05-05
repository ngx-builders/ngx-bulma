import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import {BulmaTabsModule} from 'ngx-bulma';
import { MarkdownModule } from 'ngx-markdown';
import { TabRoutingModule } from './tab-routing.module';
import {TabComponent} from './tab.component';
@NgModule({
  declarations: [TabComponent],
  imports: [
    CommonModule,
    TabRoutingModule,
    BulmaTabsModule,
    MarkdownModule.forRoot({ loader: HttpClient })
  ],
  exports: [TabComponent]
})
export class TabModule { }
