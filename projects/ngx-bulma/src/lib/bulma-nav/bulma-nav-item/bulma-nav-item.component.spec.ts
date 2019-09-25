import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BulmaNavItemComponent } from './bulma-nav-item.component';

describe('BulmaNavItemComponent', () => {
  let component: BulmaNavItemComponent;
  let fixture: ComponentFixture<BulmaNavItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BulmaNavItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BulmaNavItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
