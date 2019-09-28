import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'bu-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BulmaMenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
