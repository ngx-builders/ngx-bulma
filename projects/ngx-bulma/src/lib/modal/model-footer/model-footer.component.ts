import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'bu-modal-footer',
  templateUrl: './model-footer.component.html',
  styleUrls: ['./model-footer.component.css'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BulmaModelFooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
