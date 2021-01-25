import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BulmaBoxComponent } from './box.component';

describe('BoxComponent', () => {
  let component: BulmaBoxComponent;
  let fixture: ComponentFixture<BulmaBoxComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [BulmaBoxComponent],
      }).compileComponents();
    }),
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(BulmaBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
