import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  isModalActive = false;

  constructor() { }

  ngOnInit() {
  }

  toggleModal() {
    this.isModalActive = !this.isModalActive;
  }
  closemodal() {
    this.isModalActive = false;
  }

}
