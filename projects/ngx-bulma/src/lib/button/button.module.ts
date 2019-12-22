import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button.component';
import { ButtonDirective } from './button.directive';



@NgModule({
  declarations: [ButtonComponent, ButtonDirective],
  imports: [
    CommonModule
  ],
  exports: [ButtonComponent, ButtonDirective]
})
export class BulmaButtonModule { }
