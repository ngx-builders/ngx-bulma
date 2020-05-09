import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-doc-footer',
  templateUrl: './doc-footer.component.html',
  styleUrls: ['./doc-footer.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DocFooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
