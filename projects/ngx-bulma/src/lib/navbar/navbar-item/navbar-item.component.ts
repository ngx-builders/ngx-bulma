import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'bu-nav-item',
  templateUrl: './navbar-item.component.html',
  styleUrls: ['./navbar-item.component.css'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BulmaNavbarItemComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
