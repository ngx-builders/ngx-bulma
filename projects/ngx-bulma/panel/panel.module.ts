import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { THEME_SERVICE, THEME_VALUES } from '@ngx-builders/ngx-bulma/services';
import { BulmaPanelBlockComponent } from './panel-block/panel-block.component';
import { BulmaPanelHeadingComponent } from './panel-heading/panel-heading.component';
import { BulmaPanelComponent } from './panel.component';

@NgModule({
  declarations: [BulmaPanelComponent, BulmaPanelHeadingComponent, BulmaPanelBlockComponent],
  imports: [CommonModule],
  exports: [BulmaPanelComponent, BulmaPanelHeadingComponent, BulmaPanelBlockComponent],
  providers: [{ provide: THEME_SERVICE, useValue: THEME_VALUES }],
})
export class BulmaPanelModule {}
