import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonDirective } from './button.directive';
import { THEME_SERVICE, THEME_VALUES } from '../services/theme.service';

@NgModule({
  declarations: [ButtonDirective],
  imports: [
    CommonModule
  ],
  exports: [ButtonDirective],
  providers: [{ provide: THEME_SERVICE, useValue: THEME_VALUES }]

})
export class BulmaButtonModule { }
