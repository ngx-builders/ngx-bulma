import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'bu-modal-head',
  templateUrl: './model-head.component.html',
  styleUrls: ['./model-head.component.css'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BulmaModelHeadComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
