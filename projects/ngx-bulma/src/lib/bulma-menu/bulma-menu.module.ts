import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BulmaMenuComponent } from './bulma-menu.component';



@NgModule({
  declarations: [BulmaMenuComponent],
  imports: [
    CommonModule
  ],
  exports: [BulmaMenuComponent]
})
export class BulmaMenuModule { }
