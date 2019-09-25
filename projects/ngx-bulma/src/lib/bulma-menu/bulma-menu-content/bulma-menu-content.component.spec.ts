import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BulmaMenuContentComponent } from './bulma-menu-content.component';

describe('BulmaMenuContentComponent', () => {
  let component: BulmaMenuContentComponent;
  let fixture: ComponentFixture<BulmaMenuContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BulmaMenuContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BulmaMenuContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
