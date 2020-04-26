import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NavItemDirective } from './nav-item.directive';
import { BulmaNavbarBrandComponent } from './navbar-brand/navbar-brand.component';
import { NavbarDropdownComponent } from './navbar-dropdown/navbar-dropdown.component';
import { NavbarLinkComponent } from './navbar-link/navbar-link.component';
import { BulmaNavbarComponent } from './navbar.component';

@NgModule({
  declarations: [
    BulmaNavbarComponent,
    BulmaNavbarBrandComponent,
    NavbarLinkComponent,
    NavbarDropdownComponent,
    NavItemDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BulmaNavbarComponent,
    BulmaNavbarBrandComponent,
    NavbarLinkComponent,
    NavbarDropdownComponent,
    NavItemDirective
  ]
})
export class BulmaNavbarModule { }
