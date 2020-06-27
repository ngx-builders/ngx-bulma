import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'bu-card-image',
  templateUrl: './card-image.component.html',
  styleUrls: ['./card-image.component.css'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BulmaCardCardImageComponent implements OnInit {
  @HostBinding('class') class = 'card-image';

  constructor() {}

  ngOnInit(): void {}
}
