import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BulmaCardContentComponent } from './card-content.component';

describe('CardContentComponent', () => {
  let component: BulmaCardContentComponent;
  let fixture: ComponentFixture<BulmaCardContentComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [BulmaCardContentComponent],
      }).compileComponents();
    }),
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(BulmaCardContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
