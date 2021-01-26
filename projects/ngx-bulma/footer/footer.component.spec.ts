import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BulmaFooterComponent } from './footer.component';

describe('BulmaFooterComponent', () => {
  let component: BulmaFooterComponent;
  let fixture: ComponentFixture<BulmaFooterComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [BulmaFooterComponent],
      }).compileComponents();
    }),
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(BulmaFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
