import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BulmaCardComponent } from './bulma-card.component';

@NgModule({
  declarations: [BulmaCardComponent],
  imports: [
    CommonModule
  ],
  exports: [BulmaCardComponent]
})
export class BulmaCardModule { }
