import { Component, ViewEncapsulation, ChangeDetectionStrategy, Input, ChangeDetectorRef, AfterContentChecked } from '@angular/core';
import { TabsService } from '../tabs.service';

@Component({
  selector: 'bu-tab-item',
  templateUrl: './tab-item.component.html',
  styleUrls: ['./tab-item.component.css'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class TabItemComponent implements AfterContentChecked  {

  @Input() title: string;
  public id = `bu-tab-item-${this.tabsService.getid()}`;
  public selectedId: number;

  constructor(private tabsService: TabsService, private ref: ChangeDetectorRef) {
    this.tabsService.selectedId.subscribe(data => {
      this.selectedId = data;
    });
  }

  select(event, id) {
    event.preventDefault();
    const idSeparated = id.split('-');
    this.tabsService.setSelectedId(this.getSelectedId(idSeparated));
  }

  getSelectedId(idSeparated) {
    return idSeparated[idSeparated.length - 1];
  }

  ngAfterContentChecked() {
    this.ref.detectChanges();
  }

}
