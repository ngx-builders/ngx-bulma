import { ChangeDetectionStrategy, Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'bu-nav',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers: [SharedService],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BulmaNavbarComponent implements OnInit {

  @Input()
  color: string;

  @Input()
  fixed = false;

  defaultClass = '';

  colorClass: string;
  navbarClasses = [];

  constructor(
    private sharedService: SharedService,
  ) { }

  ngOnInit() {
    this.colorClass = this.sharedService.getColorClass(this.color, this.defaultClass);

    this.navbarClasses.push(this.colorClass);
    if (this.fixed) {
      this.navbarClasses.push('is-fixed-top');
    }
  }

}
