import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu.component';
import { MenuListComponent } from './menu-list/menu-list.component';
import { MenuContentComponent } from './menu-content/menu-content.component';
import { MenuHeaderComponent } from './menu-header/menu-header.component';



@NgModule({
  declarations: [MenuComponent,
    MenuListComponent,
    MenuContentComponent,
    MenuHeaderComponent],
  imports: [
    CommonModule
  ],
  exports: [MenuComponent, MenuListComponent,
    MenuContentComponent,
    MenuHeaderComponent]
})
export class MenuModule { }
