import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import { NavbarBrandComponent } from './navbar-brand/navbar-brand.component';
import { NavbarItemComponent } from './navbar-item/navbar-item.component';



@NgModule({
  declarations: [NavbarComponent, NavbarBrandComponent, NavbarItemComponent],
  imports: [
    CommonModule
  ],
  exports: [NavbarComponent,
    NavbarBrandComponent, NavbarItemComponent]
})
export class NavbarModule { }
