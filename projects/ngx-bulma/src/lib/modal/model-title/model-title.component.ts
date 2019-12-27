import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';

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
