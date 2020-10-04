import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'bu-panel-tabs',
  templateUrl: './panel-tabs.component.html',
  styleUrls: ['./panel-tabs.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BulmaPanelTabsComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
