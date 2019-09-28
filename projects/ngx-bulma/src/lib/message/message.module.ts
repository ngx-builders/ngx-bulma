import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BulmaMessageComponent } from './message.component';
import { BulmaMessageHeaderComponent } from './message-header/message-header.component';
import { BulmaMessageContentComponent } from './message-content/message-content.component';



@NgModule({
  declarations: [BulmaMessageComponent, BulmaMessageHeaderComponent, BulmaMessageContentComponent],
  imports: [
    CommonModule
  ],
  exports: [BulmaMessageComponent, BulmaMessageHeaderComponent, BulmaMessageContentComponent]

})
export class BulmaMessageModule { }
