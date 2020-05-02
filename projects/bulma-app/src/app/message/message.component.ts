import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {

  showMyContainer = true;
  showMyPrimaryContainer=true;
  showMylLinkContainer=true;
  showMyInfoContainer=true;
  showMySuccessContainer=true;
  showMyWarningContainer=true;
  showMyDangerContainer=true;
  showMySmallContainer=true;
  showMyMeduimContainer=true;
  showMyLargeContainer=true;
  constructor() { }

  ngOnInit() {
  }

}
