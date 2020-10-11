import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { THEME_SERVICE, THEME_VALUES } from '@ngx-builders/ngx-bulma/services';
import { BulmaTileDirective } from './tile.directive';

@NgModule({
  declarations: [BulmaTileDirective],
  imports: [CommonModule],
  exports: [BulmaTileDirective],
  providers: [{ provide: THEME_SERVICE, useValue: THEME_VALUES }],
})
export class BulmaTileModule {}
