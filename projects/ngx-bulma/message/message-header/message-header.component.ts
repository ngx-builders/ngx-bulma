import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'bu-message-header',
  templateUrl: './message-header.component.html',
  styleUrls: ['./message-header.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BulmaMessageHeaderComponent implements OnInit {
  @HostBinding('class') class = 'message-header';

  showMyContainer = true;
  constructor() {}

  ngOnInit() {}
}
