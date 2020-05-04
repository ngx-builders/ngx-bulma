import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TextareaComponent} from './textarea.component';

const routes: Routes = [
  {
    path: '', component: TextareaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TextareaRoutingModule { }
