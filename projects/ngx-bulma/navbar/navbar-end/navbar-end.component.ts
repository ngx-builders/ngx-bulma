import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'bu-navbar-end',
  templateUrl: './navbar-end.component.html',
  styleUrls: ['./navbar-end.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarEndComponent implements OnInit {
  @HostBinding('class') class = 'navbar-end';

  constructor() {}

  ngOnInit(): void {}
}
