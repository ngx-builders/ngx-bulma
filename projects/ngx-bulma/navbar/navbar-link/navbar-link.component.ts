import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Input,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'bu-navbar-link',
  templateUrl: './navbar-link.component.html',
  styleUrls: ['./navbar-link.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarLinkComponent implements OnInit {
  @HostBinding('class') class = 'navbar-item has-dropdown is-hoverable';

  @Input() title: string;

  constructor() {}

  ngOnInit(): void {}
}
