import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BulmaTabsComponent } from './bulma-tabs.component';

describe('BulmaTabsComponent', () => {
  let component: BulmaTabsComponent;
  let fixture: ComponentFixture<BulmaTabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BulmaTabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BulmaTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
