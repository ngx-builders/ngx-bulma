import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BulmaPanelHeadingComponent } from './panel-heading/panel-heading.component';
import { BulmaPanelBlockComponent } from './panel-block/panel-block.component';
import { BulmaPanelTabsComponent } from './panel-tabs/panel-tabs.component';
import { BulmaPanelComponent } from './panel.component';

@NgModule({
  declarations: [BulmaPanelComponent, BulmaPanelHeadingComponent,
    BulmaPanelBlockComponent, BulmaPanelTabsComponent],
  imports: [
    CommonModule
  ],
  exports: [BulmaPanelComponent, BulmaPanelHeadingComponent,
    BulmaPanelBlockComponent, BulmaPanelTabsComponent]
})
export class BulmaPanelModule { }
