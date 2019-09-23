import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownComponent } from './dropdown.component';
import { FormsModule } from '@angular/forms';
import { BulmaOptionsComponent } from './bulma-options/bulma-options.component';


@NgModule({
  declarations: [DropdownComponent, BulmaOptionsComponent],
  imports: [
    CommonModule, FormsModule
  ],
  exports: [DropdownComponent,BulmaOptionsComponent]
})
export class DropdownModule { }
