import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BulmaPanelComponent } from './bulma-panel.component';
import { BulmaPanelHeadingComponent } from './bulma-panel-heading/bulma-panel-heading.component';
import { BulmaPanelBlockComponent } from './bulma-panel-block/bulma-panel-block.component';
import { BulmaPanelTabsComponent } from './bulma-panel-tabs/bulma-panel-tabs.component';



@NgModule({
  declarations: [BulmaPanelComponent, BulmaPanelHeadingComponent, BulmaPanelBlockComponent, BulmaPanelTabsComponent],
  imports: [
    CommonModule
  ],
  exports: [BulmaPanelComponent, BulmaPanelHeadingComponent, BulmaPanelBlockComponent, BulmaPanelTabsComponent]
})
export class BulmaPanelModule { }
