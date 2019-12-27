import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { THEME_SERVICE, THEME_VALUES } from '../services/theme.service';
import { ProgressbarDirective } from './progressbar.directive';

@NgModule({
  declarations: [ProgressbarDirective],
  imports: [
    CommonModule
  ],
  exports: [ProgressbarDirective],
  providers: [{ provide: THEME_SERVICE, useValue: THEME_VALUES }]

})
export class BulmaProgressbarModule { }
