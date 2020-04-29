import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BulmaModalHeadComponent } from './modal-head.component';

describe('ModelHeadComponent', () => {
  let component: BulmaModalHeadComponent;
  let fixture: ComponentFixture<BulmaModalHeadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BulmaModalHeadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BulmaModalHeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
