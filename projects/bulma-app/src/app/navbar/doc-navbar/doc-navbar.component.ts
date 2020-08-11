import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-doc-navbar',
  templateUrl: './doc-navbar.component.html',
  styleUrls: ['./doc-navbar.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DocNavbarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
