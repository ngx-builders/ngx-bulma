import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BulmaMenuComponent } from './menu.component';
import { BulmaMenuListComponent } from './menu-list/menu-list.component';
import { BulmaMenuContentComponent } from './menu-content/menu-content.component';
import { BulmaMenuHeaderComponent } from './menu-header/menu-header.component';



@NgModule({
  declarations: [BulmaMenuComponent,
    BulmaMenuListComponent,
    BulmaMenuContentComponent,
    BulmaMenuHeaderComponent],
  imports: [
    CommonModule
  ],
  exports: [BulmaMenuComponent, BulmaMenuListComponent,
    BulmaMenuContentComponent,
    BulmaMenuHeaderComponent]
})
export class BulmaMenuModule { }
