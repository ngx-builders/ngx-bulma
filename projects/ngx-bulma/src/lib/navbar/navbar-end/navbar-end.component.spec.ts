import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarEndComponent } from './navbar-end.component';

describe('NavbarEndComponent', () => {
  let component: NavbarEndComponent;
  let fixture: ComponentFixture<NavbarEndComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarEndComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarEndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
