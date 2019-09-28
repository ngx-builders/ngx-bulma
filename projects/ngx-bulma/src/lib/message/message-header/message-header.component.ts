import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'bu-message-header',
  templateUrl: './message-header.component.html',
  styleUrls: ['./message-header.component.css'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BulmaMessageHeaderComponent implements OnInit {
  showMyContainer: boolean = true;
  constructor() { }

  ngOnInit() {
  }

}
