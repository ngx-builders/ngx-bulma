import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BulmaMenuHeaderComponent } from './menu-header.component';

describe('MenuHeaderComponent', () => {
  let component: BulmaMenuHeaderComponent;
  let fixture: ComponentFixture<BulmaMenuHeaderComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [BulmaMenuHeaderComponent],
      }).compileComponents();
    }),
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(BulmaMenuHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
