import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BulmaPaginationComponent } from './pagination.component';

@NgModule({
  declarations: [BulmaPaginationComponent],
  imports: [CommonModule],
  exports: [BulmaPaginationComponent],
})
export class BulmaPaginationModule {}
