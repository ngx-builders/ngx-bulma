import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BulmaNavbarBrandComponent } from './navbar-brand/navbar-brand.component';
import { BulmaNavbarItemComponent } from './navbar-item/navbar-item.component';
import { BulmaNavbarComponent } from './navbar.component';



@NgModule({
  declarations: [BulmaNavbarComponent, BulmaNavbarBrandComponent, BulmaNavbarItemComponent],
  imports: [
    CommonModule
  ],
  exports: [BulmaNavbarComponent,
    BulmaNavbarBrandComponent, BulmaNavbarItemComponent]
})
export class BulmaNavbarModule { }
