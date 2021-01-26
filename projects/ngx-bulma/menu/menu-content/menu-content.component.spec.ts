import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BulmaMenuContentComponent } from './menu-content.component';

describe('MenuContentComponent', () => {
  let component: BulmaMenuContentComponent;
  let fixture: ComponentFixture<BulmaMenuContentComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [BulmaMenuContentComponent],
      }).compileComponents();
    }),
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(BulmaMenuContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
