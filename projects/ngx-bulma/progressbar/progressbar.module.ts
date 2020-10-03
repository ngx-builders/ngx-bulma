import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { THEME_SERVICE, THEME_VALUES } from '@ngx-builders/ngx-bulma/services';
import { BulmaProgressbarDirective } from './progressbar.directive';

@NgModule({
  declarations: [BulmaProgressbarDirective],
  imports: [CommonModule],
  exports: [BulmaProgressbarDirective],
  providers: [{ provide: THEME_SERVICE, useValue: THEME_VALUES }],
})
export class BulmaProgressbarModule {}
