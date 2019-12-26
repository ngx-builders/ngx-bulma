import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'bu-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.css'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BulmaMenuListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
