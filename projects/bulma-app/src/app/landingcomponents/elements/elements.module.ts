import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ElementsRoutingModule } from './elements-routing.module';
import { ElementComponent } from './elements.home';

@NgModule({
  declarations: [ElementComponent],
  imports: [CommonModule, ElementsRoutingModule],
  exports: [ElementComponent],
})
export class ElementsModule {}
