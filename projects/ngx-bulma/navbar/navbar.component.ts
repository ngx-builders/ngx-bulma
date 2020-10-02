import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  ElementRef,
  Input,
  OnDestroy,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { SharedService } from '@ngx-builders/ngx-bulma/services';
import { fromEvent, Subscription } from 'rxjs';
import { BulmaNavbarBrandComponent } from './navbar-brand/navbar-brand.component';

@Component({
  selector: 'bu-nav',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers: [SharedService],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BulmaNavbarComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input()
  color: string;

  @Input()
  fixed = false;

  @Input()
  useBuiltInToggler = true;

  defaultClass = '';

  colorClass: string;
  navbarClasses = [];

  @ContentChild(BulmaNavbarBrandComponent, { read: ElementRef }) cc: ElementRef;

  navBurger: HTMLElement = null;
  navMenu: HTMLElement = null;

  private navBurgerSubscription: Subscription = null;
  private navMenuSubscription: Subscription = null;

  constructor(private sharedService: SharedService, private elementRef: ElementRef) {}

  ngOnInit() {
    this.colorClass = this.sharedService.getColorClass(this.color, this.defaultClass);

    this.navbarClasses.push(this.colorClass);
    if (this.fixed) {
      this.navbarClasses.push('is-fixed-top');
    }
  }

  ngAfterViewInit() {
    if (this.cc && this.useBuiltInToggler) {
      this.navBurger = this.cc.nativeElement.querySelector('.navbar-burger');
      this.navMenu = this.elementRef.nativeElement.querySelector('.navbar-menu');

      this.navBurgerSubscription = fromEvent(this.navBurger, 'click').subscribe(
        (_) => this.toggleNav(),
        console.error,
      );
      this.navMenuSubscription = fromEvent(this.navMenu, 'click').subscribe(
        (_) => this.toggleNav(),
        console.error,
      );
    }
  }

  toggleNav() {
    if (this.navBurger != null && this.navMenu != null) {
      this.navBurger.classList.toggle('is-active');
      this.navMenu.classList.toggle('is-active');
    }
  }

  ngOnDestroy() {
    this.navBurgerSubscription?.unsubscribe();
    this.navMenuSubscription?.unsubscribe();
  }
}
