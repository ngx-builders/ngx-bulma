import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'bu-model-head',
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
