import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'bu-bulma-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BulmaPaginationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
