import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'bu-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BulmaPanelComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
