import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'bu-card-content',
  templateUrl: './card-content.component.html',
  styleUrls: ['./card-content.component.css'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BulmaCardContentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
