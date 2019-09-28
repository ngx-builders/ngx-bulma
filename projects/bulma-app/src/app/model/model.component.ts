import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.css']
})
export class ModelComponent implements OnInit {

  isModalActive: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  toggleModal() {
    this.isModalActive = !this.isModalActive;
  }
  closemodel()
  {
    this.isModalActive=false;
  }

}
