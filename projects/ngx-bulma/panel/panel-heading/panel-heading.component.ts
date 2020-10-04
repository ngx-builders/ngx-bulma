import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'bu-panel-heading',
  templateUrl: './panel-heading.component.html',
  styleUrls: ['./panel-heading.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BulmaPanelHeadingComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
