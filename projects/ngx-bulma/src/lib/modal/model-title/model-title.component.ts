import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'bu-model-title',
  templateUrl: './model-title.component.html',
  styleUrls: ['./model-title.component.css'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BulmaModelTitleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
