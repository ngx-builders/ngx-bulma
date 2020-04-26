import { ChangeDetectionStrategy, Component, HostBinding, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'bu-model-content',
  templateUrl: './model-content.component.html',
  styleUrls: ['./model-content.component.css'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BulmaModelContentComponent implements OnInit {

  @HostBinding('class') class = 'modal-card-body';

  constructor() { }

  ngOnInit() {
  }

}
