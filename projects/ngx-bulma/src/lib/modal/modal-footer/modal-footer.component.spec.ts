import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BulmaModalFooterComponent } from './modal-footer.component';

describe('ModelFooterComponent', () => {
  let component: BulmaModalFooterComponent;
  let fixture: ComponentFixture<BulmaModalFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BulmaModalFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BulmaModalFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
