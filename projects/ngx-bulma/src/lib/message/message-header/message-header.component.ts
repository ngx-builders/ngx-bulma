import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'bu-message-header',
  templateUrl: './message-header.component.html',
  styleUrls: ['./message-header.component.css'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BulmaMessageHeaderComponent implements OnInit {
  showMyContainer = true;
  constructor() { }

  ngOnInit() {
  }

}
