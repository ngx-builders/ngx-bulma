import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BulmaModalComponent } from './bulma-modal.component';

describe('BulmaModalComponent', () => {
  let component: BulmaModalComponent;
  let fixture: ComponentFixture<BulmaModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BulmaModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BulmaModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
