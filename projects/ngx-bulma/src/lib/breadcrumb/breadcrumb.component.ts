import {
  Component, OnInit,
  Input, Output,
  EventEmitter,
  ViewEncapsulation,
  ChangeDetectionStrategy
} from '@angular/core';

@Component({
  selector: 'bu-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BulmaBreadcrumbComponent implements OnInit {

  @Input() data: any[];

  @Output() selectedNav = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

}
