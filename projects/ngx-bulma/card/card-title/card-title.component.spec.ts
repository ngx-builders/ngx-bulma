import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CardTitleComponent } from './card-title.component';

describe('CardTitleComponent', () => {
  let component: CardTitleComponent;
  let fixture: ComponentFixture<CardTitleComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [CardTitleComponent],
      }).compileComponents();
    }),
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(CardTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
