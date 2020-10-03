import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BulmaButtonModule } from '@ngx-builders/ngx-bulma/button';
import { BulmaContainerModule } from '@ngx-builders/ngx-bulma/container';
import { BulmaHeroModule } from '@ngx-builders/ngx-bulma/hero';
import { MarkdownModule } from 'ngx-markdown';
import { IntroductionRoutingModule } from './introduction-routing.module';
import { IntroductionComponent } from './introduction.component';

@NgModule({
  declarations: [IntroductionComponent],
  imports: [
    CommonModule,
    IntroductionRoutingModule,
    BulmaHeroModule,
    BulmaButtonModule,
    BulmaContainerModule,
    MarkdownModule.forRoot({ loader: HttpClient }),
  ],
  exports: [IntroductionComponent],
})
export class IntroductionModule {}
