import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'bu-card-footer',
  templateUrl: './card-footer.component.html',
  styleUrls: ['./card-footer.component.css'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BulmaCardFooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
