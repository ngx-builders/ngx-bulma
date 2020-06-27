import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BulmaCardContentComponent } from './card-content/card-content.component';
import { BulmaCardFooterComponent } from './card-footer/card-footer.component';
import { BulmaCardHeaderComponent } from './card-header/card-header.component';
import { BulmaCardCardImageComponent } from './card-image/card-image.component';
import { BulmaCardTitleComponent } from './card-title/card-title.component';
import { BulmaCardComponent } from './card.component';

@NgModule({
  declarations: [
    BulmaCardComponent,
    BulmaCardHeaderComponent,
    BulmaCardContentComponent,
    BulmaCardFooterComponent,
    BulmaCardTitleComponent,
    BulmaCardCardImageComponent,
  ],
  imports: [CommonModule],
  exports: [
    BulmaCardComponent,
    BulmaCardHeaderComponent,
    BulmaCardContentComponent,
    BulmaCardFooterComponent,
    BulmaCardTitleComponent,
    BulmaCardCardImageComponent,
  ],
})
export class BulmaCardModule {}
