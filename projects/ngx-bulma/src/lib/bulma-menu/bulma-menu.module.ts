import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BulmaMenuComponent } from './bulma-menu.component';
import { BulmaMenuListComponent } from './bulma-menu-list/bulma-menu-list.component';
import { BulmaMenuContentComponent } from './bulma-menu-content/bulma-menu-content.component';
import { BulmaMenuHeaderComponent } from './bulma-menu-header/bulma-menu-header.component';



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
