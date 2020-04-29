import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BulmaModalContentComponent } from './modal-content/modal-content.component';
import { BulmaModalFooterComponent } from './modal-footer/modal-footer.component';
import { BulmaModalHeaderComponent } from './modal-header/modal-header.component';
import { BulmaModalTitleComponent } from './modal-title/modal-title.component';
import { BulmaModalComponent } from './modal.component';



@NgModule({
  declarations: [BulmaModalComponent, BulmaModalHeaderComponent,
    BulmaModalContentComponent, BulmaModalFooterComponent,
    BulmaModalTitleComponent],
  imports: [
    CommonModule
  ],
  exports: [BulmaModalComponent, BulmaModalHeaderComponent,
    BulmaModalContentComponent, BulmaModalFooterComponent,
    BulmaModalTitleComponent],

})
export class BulmaModalModule { }
