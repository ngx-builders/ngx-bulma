import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BulmaModalComponent } from './modal.component';
import { BulmaModelContentComponent } from './model-content/model-content.component';
import { BulmaModelFooterComponent } from './model-footer/model-footer.component';
import { BulmaModelHeadComponent } from './model-head/model-head.component';
import { BulmaModelTitleComponent } from './model-title/model-title.component';



@NgModule({
  declarations: [BulmaModalComponent, BulmaModelHeadComponent,
    BulmaModelContentComponent, BulmaModelFooterComponent,
    BulmaModelTitleComponent],
  imports: [
    CommonModule
  ],
  exports: [BulmaModalComponent, BulmaModelHeadComponent,
    BulmaModelContentComponent, BulmaModelFooterComponent,
    BulmaModelTitleComponent],

})
export class BulmaModalModule { }
