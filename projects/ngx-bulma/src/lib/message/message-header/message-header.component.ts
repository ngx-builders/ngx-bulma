import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bu-message-header',
  templateUrl: './message-header.component.html',
  styleUrls: ['./message-header.component.css']
})
export class MessageHeaderComponent implements OnInit {
  showMyContainer: boolean = true;
  constructor() { }

  ngOnInit() {
  }
 
}
