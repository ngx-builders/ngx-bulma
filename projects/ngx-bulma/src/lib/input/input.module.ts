import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputDirective } from './input.directive';
import { THEME_SERVICE, THEME_VALUES } from '../services/theme.service';

@NgModule({
  declarations: [InputDirective],
  imports: [
    CommonModule
  ],
  exports: [InputDirective],
  providers: [{ provide: THEME_SERVICE, useValue: THEME_VALUES }]
})
export class BulmaInputModule { }
