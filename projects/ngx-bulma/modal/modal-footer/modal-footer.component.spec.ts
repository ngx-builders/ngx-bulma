import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BulmaModalFooterComponent } from './modal-footer.component';

describe('BulmaModalFooterComponent', () => {
  let component: BulmaModalFooterComponent;
  let fixture: ComponentFixture<BulmaModalFooterComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [BulmaModalFooterComponent],
      }).compileComponents();
    }),
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(BulmaModalFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
