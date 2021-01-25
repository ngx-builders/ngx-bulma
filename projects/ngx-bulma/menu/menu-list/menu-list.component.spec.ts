import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BulmaMenuListComponent } from './menu-list.component';

describe('MenuListComponent', () => {
  let component: BulmaMenuListComponent;
  let fixture: ComponentFixture<BulmaMenuListComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [BulmaMenuListComponent],
      }).compileComponents();
    }),
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(BulmaMenuListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
