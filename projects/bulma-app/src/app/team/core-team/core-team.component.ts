import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { Profile } from '../profile';

@Component({
  selector: 'app-core-team',
  templateUrl: './core-team.component.html',
  styleUrls: ['./core-team.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CoreTeamComponent implements OnInit {
  teamProfile$: Observable<Profile[]>;

  constructor(private httpService: HttpClient) {}

  ngOnInit(): void {
    this.teamProfile$ = this.httpService.get<Profile[]>('../../../assets/team-profile.json');
  }
}
