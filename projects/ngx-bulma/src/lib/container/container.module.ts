import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { THEME_SERVICE, THEME_VALUES } from '../services/theme.service';
import { ContainerDirective } from './container.directive';

@NgModule({
  declarations: [ContainerDirective],
  imports: [
    CommonModule
  ],
  exports: [ContainerDirective],
  providers: [{ provide: THEME_SERVICE, useValue: THEME_VALUES }]
})
export class BulmaContainerModule { }
