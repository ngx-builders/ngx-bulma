import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { THEME_SERVICE, THEME_VALUES } from '@ngx-builders/ngx-bulma/services';
import { BulmaHeroComponent } from './hero.component';

@NgModule({
  declarations: [BulmaHeroComponent],
  imports: [CommonModule],
  exports: [BulmaHeroComponent],
  providers: [{ provide: THEME_SERVICE, useValue: THEME_VALUES }],
})
export class BulmaHeroModule {}
