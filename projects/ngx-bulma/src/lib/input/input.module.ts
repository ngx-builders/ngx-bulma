import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { THEME_SERVICE, THEME_VALUES } from '../services/theme.service';
import { InputDirective } from './input.directive';

@NgModule({
  declarations: [InputDirective],
  imports: [
    CommonModule
  ],
  exports: [InputDirective],
  providers: [{ provide: THEME_SERVICE, useValue: THEME_VALUES }]
})
export class BulmaInputModule { }
