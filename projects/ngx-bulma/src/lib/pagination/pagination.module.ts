import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BulmaPaginationComponent } from './pagination.component';



@NgModule({
  declarations: [BulmaPaginationComponent],
  imports: [
    CommonModule
  ],
  exports: [BulmaPaginationComponent]
})
export class BulmaPaginationModule { }
