import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BulmaMessageContentComponent } from './message-content/message-content.component';
import { BulmaMessageHeaderComponent } from './message-header/message-header.component';
import { BulmaMessageComponent } from './message.component';
import {MessageDirective} from './message.directive';
import { THEME_SERVICE, THEME_VALUES } from '../services/theme.service';



@NgModule({
  declarations: [BulmaMessageComponent, BulmaMessageHeaderComponent, BulmaMessageContentComponent,MessageDirective],
  imports: [
    CommonModule
  ],
  exports: [BulmaMessageComponent, BulmaMessageHeaderComponent, BulmaMessageContentComponent,MessageDirective],
  providers: [{ provide: THEME_SERVICE, useValue: THEME_VALUES }]


})
export class BulmaMessageModule { }
