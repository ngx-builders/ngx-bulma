import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'bu-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BulmaFooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
