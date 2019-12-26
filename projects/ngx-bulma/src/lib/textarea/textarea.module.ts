import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { THEME_SERVICE, THEME_VALUES } from '../services/theme.service';
import { TextareaDirective } from './textarea.directive';

@NgModule({
  declarations: [TextareaDirective],
  imports: [
    CommonModule
  ],
  exports: [TextareaDirective],
  providers: [{ provide: THEME_SERVICE, useValue: THEME_VALUES }]

})
export class BulmaTextareaModule { }
