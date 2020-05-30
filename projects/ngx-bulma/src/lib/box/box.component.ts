import { ChangeDetectionStrategy, HostBinding, ViewEncapsulation } from '@angular/core';
ent({
  selector: 'bu-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.css'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
});
export class BulmaBoxComponent {
  @HostBinding('class') class = 'box';
}
