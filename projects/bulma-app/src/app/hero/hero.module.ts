import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BulmaContainerModule } from '@ngx-builders/ngx-bulma/container';
import { BulmaHeroModule } from '@ngx-builders/ngx-bulma/hero';
import { MarkdownModule } from 'ngx-markdown';
import { HeroRoutingModule } from './hero-routing.module';
import { HeroComponent } from './hero.component';

@NgModule({
  declarations: [HeroComponent],
  imports: [
    CommonModule,
    HeroRoutingModule,
    BulmaHeroModule,
    BulmaContainerModule,
    MarkdownModule.forRoot({ loader: HttpClient }),
  ],
  exports: [HeroComponent],
})
export class HeroModule {}
