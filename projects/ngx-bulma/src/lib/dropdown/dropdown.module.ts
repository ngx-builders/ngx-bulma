import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BulmaDropdownComponent } from './dropdown.component';



@NgModule({
  declarations: [BulmaDropdownComponent],
  imports: [
    CommonModule
  ]
  , exports: [BulmaDropdownComponent]
})
export class BulmaDropdownModule { }
