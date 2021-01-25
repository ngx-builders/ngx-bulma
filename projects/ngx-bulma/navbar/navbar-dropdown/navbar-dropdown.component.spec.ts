import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NavbarDropdownComponent } from './navbar-dropdown.component';

describe('NavbarDropdownComponent', () => {
  let component: NavbarDropdownComponent;
  let fixture: ComponentFixture<NavbarDropdownComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [NavbarDropdownComponent],
      }).compileComponents();
    }),
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
