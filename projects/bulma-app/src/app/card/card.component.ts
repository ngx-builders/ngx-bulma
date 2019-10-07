import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  card:any
  constructor() { }

  ngOnInit() {
    this.card="import { BulmaCardModule} from 'ngx-bulma' "+'<br/>';
    this.card+= "@NgModule({ "+ 
    "imports: [BulmaCardModule]"
    +"})";
  }

}
