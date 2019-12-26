import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'bu-message-content',
  templateUrl: './message-content.component.html',
  styleUrls: ['./message-content.component.css'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BulmaMessageContentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
