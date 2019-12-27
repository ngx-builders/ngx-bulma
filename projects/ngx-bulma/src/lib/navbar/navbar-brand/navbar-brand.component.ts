import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'bu-nav-brand',
  templateUrl: './navbar-brand.component.html',
  styleUrls: ['./navbar-brand.component.css'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BulmaNavbarBrandComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
