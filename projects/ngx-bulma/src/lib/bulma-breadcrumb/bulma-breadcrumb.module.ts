import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BulmaBreadcrumbComponent } from './bulma-breadcrumb.component';

@NgModule({
  declarations: [BulmaBreadcrumbComponent],
  imports: [
    CommonModule
  ],
  exports: [BulmaBreadcrumbComponent]
})
export class BulmaBreadcrumbModule { }
