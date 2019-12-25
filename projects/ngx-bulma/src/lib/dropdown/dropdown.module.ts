import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BulmaDropdownComponent } from './dropdown.component';



@NgModule({
  declarations: [BulmaDropdownComponent],
  imports: [
    CommonModule
  ]
  , exports: [BulmaDropdownComponent]
})
export class BulmaDropdownModule { }
