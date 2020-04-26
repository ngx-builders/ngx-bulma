import { ChangeDetectionStrategy, Component, HostBinding, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'bu-model-title',
  templateUrl: './model-title.component.html',
  styleUrls: ['./model-title.component.css'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BulmaModelTitleComponent implements OnInit {

  @HostBinding('class') class = 'modal-card-title';

  constructor() { }

  ngOnInit() {
  }

}
