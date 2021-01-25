import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ComponentsHomeComponent } from './components.home';

describe('ComponentsHomeComponent', () => {
  let component: ComponentsHomeComponent;
  let fixture: ComponentFixture<ComponentsHomeComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [ComponentsHomeComponent],
      }).compileComponents();
    }),
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
