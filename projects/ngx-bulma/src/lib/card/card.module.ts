import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card.component';
import { CardHeaderComponent } from './card-header/card-header.component';
import { CardContentComponent } from './card-content/card-content.component';
import { CardFooterComponent } from './card-footer/card-footer.component';
import { CardTitleComponent } from './card-title/card-title.component';

@NgModule({
  declarations: [CardComponent, CardHeaderComponent, CardContentComponent, CardFooterComponent, CardTitleComponent],
  imports: [
    CommonModule
  ],
  exports: [CardComponent,CardHeaderComponent,CardContentComponent,CardFooterComponent,CardTitleComponent]
})
export class CardModule { }
