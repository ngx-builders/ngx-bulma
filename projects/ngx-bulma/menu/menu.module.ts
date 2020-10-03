import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BulmaMenuContentComponent } from './menu-content/menu-content.component';
import { BulmaMenuHeaderComponent } from './menu-header/menu-header.component';
import { BulmaMenuListComponent } from './menu-list/menu-list.component';
import { BulmaMenuComponent } from './menu.component';

@NgModule({
  declarations: [
    BulmaMenuComponent,
    BulmaMenuListComponent,
    BulmaMenuContentComponent,
    BulmaMenuHeaderComponent,
  ],
  imports: [CommonModule],
  exports: [
    BulmaMenuComponent,
    BulmaMenuListComponent,
    BulmaMenuContentComponent,
    BulmaMenuHeaderComponent,
  ],
})
export class BulmaMenuModule {}
