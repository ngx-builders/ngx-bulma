import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'bu-modal-head',
  templateUrl: './modal-head.component.html',
  styleUrls: ['./modal-head.component.css'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BulmaModalHeadComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
