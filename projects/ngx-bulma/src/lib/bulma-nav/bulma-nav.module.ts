import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BulmaNavComponent } from './bulma-nav.component';
import { BulmaNavBrandComponent } from './bulma-nav-brand/bulma-nav-brand.component';
import { BulmaNavItemComponent } from './bulma-nav-item/bulma-nav-item.component';



@NgModule({
  declarations: [BulmaNavComponent, BulmaNavBrandComponent, BulmaNavItemComponent],
  imports: [
    CommonModule
  ],
  exports: [BulmaNavComponent,
    BulmaNavBrandComponent, BulmaNavItemComponent]
})
export class BulmaNavModule { }
