import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BulmaHeroComponent } from './hero.component';

describe('BulmaHeroComponent', () => {
  let component: BulmaHeroComponent;
  let fixture: ComponentFixture<BulmaHeroComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [BulmaHeroComponent],
      }).compileComponents();
    }),
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(BulmaHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
