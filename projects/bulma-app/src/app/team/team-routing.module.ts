import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoreTeamComponent } from './core-team/core-team.component';

const routes: Routes = [
  {
    path: '',
    component: CoreTeamComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeamRoutingModule {}
