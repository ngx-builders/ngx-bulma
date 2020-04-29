import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BulmaModalTitleComponent } from './modal-title.component';

describe('ModelTitleComponent', () => {
  let component: BulmaModalTitleComponent;
  let fixture: ComponentFixture<BulmaModalTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BulmaModalTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BulmaModalTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
