import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { THEME_SERVICE, THEME_VALUES } from '../services/theme.service';
import { BulmaTextareaDirective } from './textarea.directive';

@NgModule({
  declarations: [BulmaTextareaDirective],
  imports: [
    CommonModule
  ],
  exports: [BulmaTextareaDirective],
  providers: [{ provide: THEME_SERVICE, useValue: THEME_VALUES }]

})
export class BulmaTextareaModule { }
