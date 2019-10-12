import { Component, OnInit,  ViewEncapsulation, ChangeDetectionStrategy  } from '@angular/core';

@Component({
  selector: 'bu-panel-block',
  templateUrl: './panel-block.component.html',
  styleUrls: ['./panel-block.component.css'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BulmaPanelBlockComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
