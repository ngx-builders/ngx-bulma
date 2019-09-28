import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'bu-menu-content',
  templateUrl: './menu-content.component.html',
  styleUrls: ['./menu-content.component.css'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BulmaMenuContentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
