import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BulmaNavComponent } from './bulma-nav.component';



@NgModule({
  declarations: [BulmaNavComponent],
  imports: [
    CommonModule
  ],
  exports: [BulmaNavComponent]
})
export class BulmaNavModule { }
