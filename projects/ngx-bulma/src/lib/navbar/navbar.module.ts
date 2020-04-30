import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NavItemDirective } from './nav-item.directive';
import { BulmaNavbarBrandComponent } from './navbar-brand/navbar-brand.component';
import { NavbarDropdownComponent } from './navbar-dropdown/navbar-dropdown.component';
import { NavbarLinkComponent } from './navbar-link/navbar-link.component';
import { BulmaNavbarComponent } from './navbar.component';
import { NavbarStartComponent } from './navbar-start/navbar-start.component';
import { NavbarEndComponent } from './navbar-end/navbar-end.component';

@NgModule({
  declarations: [
    BulmaNavbarComponent,
    BulmaNavbarBrandComponent,
    NavbarLinkComponent,
    NavbarDropdownComponent,
    NavItemDirective,
    NavbarStartComponent,
    NavbarEndComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BulmaNavbarComponent,
    BulmaNavbarBrandComponent,
    NavbarLinkComponent,
    NavbarDropdownComponent,
    NavItemDirective,
    NavbarStartComponent,
    NavbarEndComponent
  ]
})
export class BulmaNavbarModule { }
