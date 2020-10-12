import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TagComponent } from './tag.component';

const routes: Routes = [
  {
    path: '',
    component: TagComponent,
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TagRoutingModule {}
