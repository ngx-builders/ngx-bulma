import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BulmaBoxDirective } from './box.directive';

@NgModule({
  declarations: [BulmaBoxDirective],
  imports: [CommonModule],
  exports: [BulmaBoxDirective],
})
export class BulmaBoxModule {}
