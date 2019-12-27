import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { THEME_SERVICE, THEME_VALUES } from '../services/theme.service';
import { ButtonDirective } from './button.directive';

@NgModule({
  declarations: [ButtonDirective],
  imports: [
    CommonModule
  ],
  exports: [ButtonDirective],
  providers: [{ provide: THEME_SERVICE, useValue: THEME_VALUES }]

})
export class BulmaButtonModule { }
