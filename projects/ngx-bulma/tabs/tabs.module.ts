import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { TabDirective } from './tab.directive';
import { TabsetComponent } from './tabset.component';

@NgModule({
  imports: [CommonModule],
  declarations: [TabDirective, TabsetComponent],
  exports: [TabDirective, TabsetComponent],
})
export class BulmaTabsModule {
  // static forRoot(): ModuleWithProviders {
  //   return {
  //     ngModule: BulmaTabsModule,
  //     providers: [TabsetConfig]
  //   };
  // }
}
