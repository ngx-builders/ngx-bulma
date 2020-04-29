import { ChangeDetectionStrategy, Component, HostBinding, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'bu-modal-title',
  templateUrl: './modal-title.component.html',
  styleUrls: ['./modal-title.component.css'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BulmaModalTitleComponent implements OnInit {

  @HostBinding('class') class = 'modal-card-title';

  constructor() { }

  ngOnInit() {
  }

}
