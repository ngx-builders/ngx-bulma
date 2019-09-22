import {
  Component, OnInit,
  Input, Output,
  EventEmitter
} from '@angular/core';

@Component({
  selector: 'bu-breadcrumb',
  templateUrl: './bulma-breadcrumb.component.html',
  styleUrls: ['./bulma-breadcrumb.component.css']
})
export class BulmaBreadcrumbComponent implements OnInit {

  @Input() data: any[];

  @Output() selectedNav = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

}
