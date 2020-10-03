import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BulmaBoxModule } from '@ngx-builders/ngx-bulma/box';
import { BulmaButtonModule } from '@ngx-builders/ngx-bulma/button';
import { CoreTeamComponent } from './core-team/core-team.component';
import { TeamRoutingModule } from './team-routing.module';

@NgModule({
  declarations: [CoreTeamComponent],
  imports: [CommonModule, TeamRoutingModule, BulmaBoxModule, BulmaButtonModule],
})
export class TeamModule {}
