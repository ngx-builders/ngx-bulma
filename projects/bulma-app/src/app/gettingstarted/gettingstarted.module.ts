import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MarkdownModule } from 'ngx-markdown';
import { GettingstartedRoutingModule } from './gettingstarted-routing.module';
import {GettingstartedComponent} from './gettingstarted.component';

@NgModule({
  declarations: [GettingstartedComponent],
  imports: [
    CommonModule,
    GettingstartedRoutingModule,
    MarkdownModule.forRoot({ loader: HttpClient })

  ],
  exports: [GettingstartedComponent]
})
export class GettingstartedModule { }
