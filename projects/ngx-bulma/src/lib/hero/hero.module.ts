import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { THEME_SERVICE, THEME_VALUES } from '../services/theme.service';
import { HeroComponent } from './hero.component';


@NgModule({
  declarations: [HeroComponent],
  imports: [
    CommonModule
  ],
  exports: [HeroComponent],
  providers: [{ provide: THEME_SERVICE, useValue: THEME_VALUES }]
})
export class BulmaHeroModule { }
