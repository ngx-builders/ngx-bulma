import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { THEME_SERVICE, THEME_VALUES } from '@ngx-builders/ngx-bulma/services';
import { BulmaContainerDirective } from './container.directive';

@NgModule({
  declarations: [BulmaContainerDirective],
  imports: [CommonModule],
  exports: [BulmaContainerDirective],
  providers: [{ provide: THEME_SERVICE, useValue: THEME_VALUES }],
})
export class BulmaContainerModule {}
