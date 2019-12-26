import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BulmaMessageContentComponent } from './message-content/message-content.component';
import { BulmaMessageHeaderComponent } from './message-header/message-header.component';
import { BulmaMessageComponent } from './message.component';



@NgModule({
  declarations: [BulmaMessageComponent, BulmaMessageHeaderComponent, BulmaMessageContentComponent],
  imports: [
    CommonModule
  ],
  exports: [BulmaMessageComponent, BulmaMessageHeaderComponent, BulmaMessageContentComponent]

})
export class BulmaMessageModule { }
