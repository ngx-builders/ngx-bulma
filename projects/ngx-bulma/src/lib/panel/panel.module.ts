import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { THEME_SERVICE, THEME_VALUES } from '../services/theme.service';
import { BulmaPanelBlockComponent } from './panel-block/panel-block.component';
import { BulmaPanelHeadingComponent } from './panel-heading/panel-heading.component';
import { BulmaPanelTabsComponent } from './panel-tabs/panel-tabs.component';
import { BulmaPanelComponent } from './panel.component';
import {BulmaPanelDirective} from './panel.directive';

@NgModule({
  declarations: [BulmaPanelComponent, BulmaPanelHeadingComponent,
    BulmaPanelBlockComponent, BulmaPanelTabsComponent, BulmaPanelDirective],
  imports: [
    CommonModule
  ],
  exports: [BulmaPanelComponent, BulmaPanelHeadingComponent,
    BulmaPanelBlockComponent, BulmaPanelTabsComponent, BulmaPanelDirective],
    providers: [{ provide: THEME_SERVICE, useValue: THEME_VALUES }]
})
export class BulmaPanelModule { }
