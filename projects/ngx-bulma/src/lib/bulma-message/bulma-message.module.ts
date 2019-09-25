import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BulmaMessageComponent } from './bulma-message.component';
import { BulamMessageHeaderComponent } from './bulam-message-header/bulam-message-header.component';
import { BulamMessageContentComponent } from './bulam-message-content/bulam-message-content.component';



@NgModule({
  declarations: [BulmaMessageComponent, BulamMessageHeaderComponent, BulamMessageContentComponent],
  imports: [
    CommonModule
  ],
  exports:[BulmaMessageComponent,BulamMessageHeaderComponent,BulamMessageContentComponent]

})
export class BulmaMessageModule { }
