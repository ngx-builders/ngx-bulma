import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'bu-model-content',
  templateUrl: './model-content.component.html',
  styleUrls: ['./model-content.component.css'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BulmaModelContentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
