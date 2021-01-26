import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NavbarBrandComponent } from './navbar-brand.component';

describe('NavbarBrandComponent', () => {
  let component: NavbarBrandComponent;
  let fixture: ComponentFixture<NavbarBrandComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [NavbarBrandComponent],
      }).compileComponents();
    }),
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarBrandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
