import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BulmaMenuComponent } from './bulma-menu.component';

describe('BulmaMenuComponent', () => {
  let component: BulmaMenuComponent;
  let fixture: ComponentFixture<BulmaMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BulmaMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BulmaMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
