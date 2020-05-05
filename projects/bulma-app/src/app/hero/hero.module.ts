import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import {BulmaHeroModule} from 'ngx-bulma';
import { MarkdownModule } from 'ngx-markdown';
import { HeroRoutingModule } from './hero-routing.module';
import {HeroComponent} from './hero.component';

@NgModule({
  declarations: [HeroComponent],
  imports: [
    CommonModule,
    HeroRoutingModule,
    BulmaHeroModule,
    MarkdownModule.forRoot({ loader: HttpClient })
  ],
  exports: [HeroComponent]
})
export class HeroModule { }
