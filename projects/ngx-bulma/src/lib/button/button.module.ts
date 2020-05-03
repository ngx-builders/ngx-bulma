import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { THEME_SERVICE, THEME_VALUES } from '../services/theme.service';
import { BulmaButtonDirective } from './button.directive';

@NgModule({
  declarations: [BulmaButtonDirective],
  imports: [
    CommonModule
  ],
  exports: [BulmaButtonDirective],
  providers: [{ provide: THEME_SERVICE, useValue: THEME_VALUES }]

})
export class BulmaButtonModule { }
