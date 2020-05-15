import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsRoutingModule } from './forms-routing.module';
import { FormsComponent } from './forms.home';

@NgModule({
  declarations: [FormsComponent],
  imports: [CommonModule, FormsRoutingModule],
  exports: [FormsComponent],
})
export class FormsModule {}
