import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { GettingstartedComponent } from './gettingstarted.component';

describe('GettingstartedComponent', () => {
  let component: GettingstartedComponent;
  let fixture: ComponentFixture<GettingstartedComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [GettingstartedComponent],
      }).compileComponents();
    }),
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(GettingstartedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
