import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarDropdownComponent } from './navbar-dropdown.component';

describe('NavbarDropdownComponent', () => {
  let component: NavbarDropdownComponent;
  let fixture: ComponentFixture<NavbarDropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarDropdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
