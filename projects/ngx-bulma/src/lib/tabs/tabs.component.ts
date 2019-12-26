import { ChangeDetectionStrategy, Component, ContentChildren, OnInit, QueryList, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'bu-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BulmaTabsComponent {
}
