import { Component } from '@angular/core';

export interface Food {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bulma-app';
  external = ""
  data = [1, 2, 3,];
  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak222'},
    {value: 'pizza-1', viewValue: 'Pizza5555'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];
}
