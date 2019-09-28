import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'bu-bulma-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BulmaMessageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
