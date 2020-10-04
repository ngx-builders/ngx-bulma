import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'bu-panel-block',
  templateUrl: './panel-block.component.html',
  styleUrls: ['./panel-block.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BulmaPanelBlockComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
