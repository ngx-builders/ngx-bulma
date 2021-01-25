import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BoxComponent } from './box.component';

describe('BoxComponent', () => {
  let component: BoxComponent;
  let fixture: ComponentFixture<BoxComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [BoxComponent],
      }).compileComponents();
    }),
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
