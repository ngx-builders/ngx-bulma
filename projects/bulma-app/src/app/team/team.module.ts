import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BulmaBoxModule, BulmaButtonModule } from 'ngx-bulma';
import { CoreTeamComponent } from './core-team/core-team.component';
import { TeamRoutingModule } from './team-routing.module';

@NgModule({
  declarations: [CoreTeamComponent],
  imports: [CommonModule, TeamRoutingModule, BulmaBoxModule, BulmaButtonModule],
})
export class TeamModule {}
