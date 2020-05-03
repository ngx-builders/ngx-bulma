import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { THEME_SERVICE, THEME_VALUES } from '../services/theme.service';
import { BulmaInputDirective } from './input.directive';

@NgModule({
  declarations: [BulmaInputDirective],
  imports: [
    CommonModule
  ],
  exports: [BulmaInputDirective],
  providers: [{ provide: THEME_SERVICE, useValue: THEME_VALUES }]
})
export class BulmaInputModule { }
