import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'bu-navbar-start',
  templateUrl: './navbar-start.component.html',
  styleUrls: ['./navbar-start.component.css'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarStartComponent implements OnInit {
  @HostBinding('class') class = 'navbar-start';

  constructor() {}

  ngOnInit(): void {}
}
