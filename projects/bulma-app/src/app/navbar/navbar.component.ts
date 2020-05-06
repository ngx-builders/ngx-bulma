import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @ViewChild('navBurgerBasic') navBurgerBasic: ElementRef;
  @ViewChild('navMenuBasic') navMenuBasic: ElementRef;

  @ViewChild('navBurgerPrimary') navBurgerPrimary: ElementRef;
  @ViewChild('navMenuPrimary') navMenuPrimary: ElementRef;

  @ViewChild('navBurgerLink') navBurgerLink: ElementRef;
  @ViewChild('navMenuLink') navMenuLink: ElementRef;

  @ViewChild('navBurgerDark') navBurgerDark: ElementRef;
  @ViewChild('navMenuDark') navMenuDark: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  toggleBasicNavbar() {
    this.navBurgerBasic.nativeElement.classList.toggle('is-active');
    this.navMenuBasic.nativeElement.classList.toggle('is-active');
  }

  toggleNavbarPrimary() {
    this.navBurgerPrimary.nativeElement.classList.toggle('is-active');
    this.navMenuPrimary.nativeElement.classList.toggle('is-active');
  }
  toggleNavbarLink() {
    this.navBurgerLink.nativeElement.classList.toggle('is-active');
    this.navMenuLink.nativeElement.classList.toggle('is-active');
  }
  toggleNavbarDark() {
    this.navBurgerDark.nativeElement.classList.toggle('is-active');
    this.navMenuDark.nativeElement.classList.toggle('is-active');
  }

}
