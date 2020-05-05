import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import {BulmaHeroModule} from 'ngx-bulma';
import { MarkdownModule } from 'ngx-markdown';
import { HomeRoutingModule } from './home-routing.module';
import {HomeComponent} from './home.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    BulmaHeroModule,
    MarkdownModule.forRoot({ loader: HttpClient })
  ],
  exports: [HomeComponent]
})
export class HomeModule { }
