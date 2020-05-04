import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {GettingstartedComponent} from './gettingstarted.component';

const routes: Routes = [
  {
    path: '', component: GettingstartedComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GettingstartedRoutingModule { }
