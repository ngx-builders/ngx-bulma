import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';
import { filter, map } from 'rxjs/operators';

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
      filter(e => e instanceof RouterEvent),
      map(e => e as RouterEvent)
    ).subscribe(e => {
        this.currentRoute = e.url;
    });
  }
}
