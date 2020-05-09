import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BulmaButtonModule, BulmaContainerModule, BulmaHeroModule } from 'ngx-bulma';
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
    MarkdownModule.forRoot({ loader: HttpClient })

  ],
  exports: [IntroductionComponent]
})
export class IntroductionModule { }
