import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'bu-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BulmaModalComponent implements OnInit {

  @Input() open=false;
  
  constructor() { }

  ngOnInit() {
  }

}
