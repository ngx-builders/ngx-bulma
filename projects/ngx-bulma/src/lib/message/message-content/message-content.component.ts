import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'bu-message-content',
  templateUrl: './message-content.component.html',
  styleUrls: ['./message-content.component.css'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BulmaMessageContentComponent implements OnInit {
  @HostBinding('class') class = 'message-body';
  constructor() {}

  ngOnInit() {}
}
