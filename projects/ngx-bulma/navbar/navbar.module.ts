import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { THEME_SERVICE, THEME_VALUES } from '@ngx-builders/ngx-bulma/services';
import { NavItemDirective } from './nav-item.directive';
import { BulmaNavbarBrandComponent } from './navbar-brand/navbar-brand.component';
import { NavbarDropdownComponent } from './navbar-dropdown/navbar-dropdown.component';
import { NavbarEndComponent } from './navbar-end/navbar-end.component';
import { NavbarLinkComponent } from './navbar-link/navbar-link.component';
import { NavbarStartComponent } from './navbar-start/navbar-start.component';
import { BulmaNavbarComponent } from './navbar.component';

@NgModule({
  declarations: [
    BulmaNavbarComponent,
    BulmaNavbarBrandComponent,
    NavbarLinkComponent,
    NavbarDropdownComponent,
    NavItemDirective,
    NavbarStartComponent,
    NavbarEndComponent,
  ],
  imports: [CommonModule],
  providers: [{ provide: THEME_SERVICE, useValue: THEME_VALUES }],
  exports: [
    BulmaNavbarComponent,
    BulmaNavbarBrandComponent,
    NavbarLinkComponent,
    NavbarDropdownComponent,
    NavItemDirective,
    NavbarStartComponent,
    NavbarEndComponent,
  ],
})
export class BulmaNavbarModule {}
