import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TabsService {
  public nextid = 1;
  public selectedId = new BehaviorSubject<number>(null);
  constructor() { }

  getid() {
    return this.nextid++;
  }

  setSelectedId(id) {
    this.selectedId.next(id);
  }
}
