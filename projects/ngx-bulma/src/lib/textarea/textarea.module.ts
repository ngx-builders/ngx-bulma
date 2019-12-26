import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextareaDirective } from './textarea.directive';
import { THEME_SERVICE, THEME_VALUES } from '../services/theme.service';

@NgModule({
  declarations: [TextareaDirective],
  imports: [
    CommonModule
  ],
  exports: [TextareaDirective],
  providers: [{ provide: THEME_SERVICE, useValue: THEME_VALUES }]

})
export class BulmaTextareaModule { }
