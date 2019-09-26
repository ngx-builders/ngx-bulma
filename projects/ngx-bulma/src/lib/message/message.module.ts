import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageComponent } from './message.component';
import { MessageHeaderComponent } from './message-header/message-header.component';
import { MessageContentComponent } from './message-content/message-content.component';



@NgModule({
  declarations: [MessageComponent, MessageHeaderComponent, MessageContentComponent],
  imports: [
    CommonModule
  ],
  exports:[MessageComponent,MessageHeaderComponent,MessageContentComponent]

})
export class MessageModule { }
