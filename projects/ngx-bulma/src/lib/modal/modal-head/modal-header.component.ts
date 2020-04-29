import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'bu-modal-header',
  templateUrl: './modal-header.component.html',
  styleUrls: ['./modal-header.component.css'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BulmaModalHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
