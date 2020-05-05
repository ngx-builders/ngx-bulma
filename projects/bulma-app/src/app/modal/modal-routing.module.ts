import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ModalComponent} from './modal.component';

const routes: Routes = [
  {
    path: '', component: ModalComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModalRoutingModule { }
