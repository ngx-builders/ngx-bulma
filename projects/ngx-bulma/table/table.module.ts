import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BulmaTableDirective } from './table.directive';



@NgModule({
  declarations: [BulmaTableDirective],
  imports: [
    CommonModule
  ],
  exports: [BulmaTableDirective]
})
export class BulmaTableModule { }
