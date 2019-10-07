import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gettingstarted',
  templateUrl: './gettingstarted.component.html',
  styleUrls: ['./gettingstarted.component.css']
})
export class GettingstartedComponent implements OnInit {

  card:any

  
  constructor() { }

  ngOnInit() 
  {
    this.card="import { BulmaCardModule} from 'ngx-bulma' "+'<br/>';
    this.card+= "@NgModule({ "+ 
    "imports: [BulmaCardModule]"
    +"})";
    
  }

}
