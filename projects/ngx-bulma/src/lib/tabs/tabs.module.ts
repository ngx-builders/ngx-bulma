import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BulmaTabsComponent } from './tabs.component';
import { TabItemComponent } from './tab-item/tab-item.component';
import { TabsService } from './tabs.service';

@NgModule({
  declarations: [BulmaTabsComponent, TabItemComponent],
  imports: [
    CommonModule
  ],
  exports: [BulmaTabsComponent, TabItemComponent],
  providers: [TabsService]
})
export class BulmaTabsModule { }
