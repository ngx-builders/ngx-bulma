import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ElementComponent } from './elements.home';

describe('ElementComponent', () => {
  let component: ElementComponent;
  let fixture: ComponentFixture<ElementComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [ElementComponent],
      }).compileComponents();
    }),
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
