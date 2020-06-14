import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Input,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'bu-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  // tslint:disable-next-line:no-host-metadata-property
  host: {
    '[class.is-primary]': 'theme === "primary"',
    '[class.is-dark]': 'theme === "dark"',
    '[class.is-link]': 'theme === "link"',
    '[class.is-info]': 'theme === "info"',
    '[class.is-success]': 'theme === "success"',
    '[class.is-warning]': 'theme === "warning"',
    '[class.is-danger]': 'theme === "danger"',
    '[class.is-black]': 'theme === "black"',
    '[class.is-small]': 'size === "small"',
    '[class.is-medium]': 'size === "medium"',
    '[class.is-large]': 'size === "large"',
  },
})
export class BulmaMessageComponent implements OnInit {
  @Input() theme = '';
  @Input() size = '';
  @HostBinding('class') class = 'message';

  constructor() {}

  ngOnInit() {}
}
