import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import {BulmaContainerModule} from 'ngx-bulma';
import { MarkdownModule } from 'ngx-markdown';
import { ContainerRoutingModule } from './container-routing.module';
import {ContainerComponent} from './container.component';

@NgModule({
  declarations: [ContainerComponent],
  imports: [
    CommonModule,
    ContainerRoutingModule,
    BulmaContainerModule,
    MarkdownModule.forRoot({ loader: HttpClient })
  ],
  exports: [ContainerComponent]
})
export class ContainerModule { }
