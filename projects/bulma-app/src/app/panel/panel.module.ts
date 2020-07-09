import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BulmaPanelModule } from 'ngx-bulma';
import { MarkdownModule } from 'ngx-markdown';
import { PanelRoutingModule } from './panel-routing.module';
import {PanelComponent} from './panel.component';

@NgModule({
  declarations: [PanelComponent],
  imports: [
    CommonModule,
    PanelRoutingModule,
    BulmaPanelModule,
    MarkdownModule.forRoot({ loader: HttpClient })
  ],
  exports: [PanelComponent]
})
export class PanelModule { }
