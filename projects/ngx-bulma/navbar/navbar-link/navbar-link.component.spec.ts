import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NavbarLinkComponent } from './navbar-link.component';

describe('NavbarLinkComponent', () => {
  let component: NavbarLinkComponent;
  let fixture: ComponentFixture<NavbarLinkComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [NavbarLinkComponent],
      }).compileComponents();
    }),
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
