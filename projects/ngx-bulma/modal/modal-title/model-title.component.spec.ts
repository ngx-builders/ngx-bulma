import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BulmaModalTitleComponent } from './modal-title.component';

describe('BulmaModalTitleComponent', () => {
  let component: BulmaModalTitleComponent;
  let fixture: ComponentFixture<BulmaModalTitleComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [BulmaModalTitleComponent],
      }).compileComponents();
    }),
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(BulmaModalTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
