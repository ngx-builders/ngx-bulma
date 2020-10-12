import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Input,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'bu-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  // tslint:disable-next-line:no-host-metadata-property
  host: {
    '[class.is-black]': 'theme === "black"',
    '[class.is-dark]': 'theme === "dark"',
    '[class.is-light]': 'theme === "light" || light=== "true"',
    '[class.is-white]': 'theme === "white"',
    '[class.is-primary]': 'theme === "primary"',
    '[class.is-link]': 'theme === "link"',
    '[class.is-info]': 'theme === "info"',
    '[class.is-success]': 'theme === "success"',
    '[class.is-warning]': 'theme === "warning"',
    '[class.is-danger]': 'theme === "danger"',
    '[class.is-normal]': 'size === "normal"',
    '[class.is-medium]': 'size === "medium"',
    '[class.is-large]': 'size === "large"',
    '[class.is-rounded]': 'rounded === "true"',
    '[class.is-delete]': 'delete === "true"',
  },
})
export class BulmaTagComponent implements OnInit {
  @Input()
  theme: string;

  @Input()
  size: string;

  @Input()
  light = false;

  @Input()
  rounded = false;

  @Input()
  delete = false;

  @HostBinding('class') class = 'tag';

  constructor() {}

  ngOnInit(): void {}
}
