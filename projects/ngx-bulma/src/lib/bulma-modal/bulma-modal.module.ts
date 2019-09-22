import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BulmaModalComponent } from './bulma-modal.component';



@NgModule({
  declarations: [BulmaModalComponent],
  imports: [
    CommonModule
  ],
  exports: [BulmaModalComponent]
})
export class BulmaModalModule { }
