import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { IntroductionComponent } from './introduction.component';

describe('IntroductionComponent', () => {
  let component: IntroductionComponent;
  let fixture: ComponentFixture<IntroductionComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [IntroductionComponent],
      }).compileComponents();
    }),
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
