import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ComponentsRoutingModule } from './components-routing.module';
import { ComponentsHomeComponent } from './components.home';

@NgModule({
  declarations: [ComponentsHomeComponent],
  imports: [CommonModule, ComponentsRoutingModule],
  exports: [ComponentsHomeComponent],
})
export class ComponentsModule {}
