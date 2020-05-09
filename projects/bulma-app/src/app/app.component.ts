import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NavigationEnd, Router, RouterEvent } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  @ViewChild('navBurger') navBurger: ElementRef;
  @ViewChild('navMenu') navMenu: ElementRef;

  currentRoute = '';

  constructor(private router: Router) {

  }

  ngOnInit() {
    this.router.events.pipe(
      filter(e => e instanceof RouterEvent)
    ).subscribe(e => {
      if (e instanceof NavigationEnd) {
        this.currentRoute = e.url;
      }
    });

    // console.log(this.currentRoute);
  }

  toggleNavbar() {
    this.navBurger.nativeElement.classList.toggle('is-active');
    this.navMenu.nativeElement.classList.toggle('is-active');
  }
}
