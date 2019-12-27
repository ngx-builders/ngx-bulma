import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BulmaCardContentComponent } from './card-content/card-content.component';
import { BulmaCardFooterComponent } from './card-footer/card-footer.component';
import { BulmaCardHeaderComponent } from './card-header/card-header.component';
import { BulmaCardTitleComponent } from './card-title/card-title.component';
import { BulmaCardComponent } from './card.component';

@NgModule({
  declarations: [BulmaCardComponent, BulmaCardHeaderComponent,
    BulmaCardContentComponent, BulmaCardFooterComponent, BulmaCardTitleComponent],
  imports: [
    CommonModule
  ],
  exports: [BulmaCardComponent, BulmaCardHeaderComponent,
    BulmaCardContentComponent, BulmaCardFooterComponent, BulmaCardTitleComponent]
})
export class BulmaCardModule { }
