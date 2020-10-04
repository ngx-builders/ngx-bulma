import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'bu-card-content',
  templateUrl: './card-content.component.html',
  styleUrls: ['./card-content.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BulmaCardContentComponent implements OnInit {
  @HostBinding('class') class = 'card-content';

  constructor() {}

  ngOnInit() {}
}
