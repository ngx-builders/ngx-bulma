import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BulmaModalContentComponent } from './modal-content.component';

describe('BulmaModalContentComponent', () => {
  let component: BulmaModalContentComponent;
  let fixture: ComponentFixture<BulmaModalContentComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [BulmaModalContentComponent],
      }).compileComponents();
    }),
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(BulmaModalContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
