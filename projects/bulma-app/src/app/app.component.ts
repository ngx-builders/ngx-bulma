import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterEvent } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  currentRoute = '';

  constructor(private router: Router) { }

  ngOnInit() {
    this.router.events.pipe(
      filter(e => e instanceof RouterEvent)
    ).subscribe(e => {
      if (e instanceof NavigationEnd) {
        this.currentRoute = e.url;
      }
    });
  }
}
