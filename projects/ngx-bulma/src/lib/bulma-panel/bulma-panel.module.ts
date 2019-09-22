import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BulmaPanelComponent } from './bulma-panel.component';



@NgModule({
  declarations: [BulmaPanelComponent],
  imports: [
    CommonModule
  ],
  exports: [BulmaPanelComponent]
})
export class BulmaPanelModule { }
