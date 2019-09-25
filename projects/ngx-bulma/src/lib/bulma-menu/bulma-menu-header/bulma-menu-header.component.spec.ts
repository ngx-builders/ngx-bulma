import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BulmaMenuHeaderComponent } from './bulma-menu-header.component';

describe('BulmaMenuHeaderComponent', () => {
  let component: BulmaMenuHeaderComponent;
  let fixture: ComponentFixture<BulmaMenuHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BulmaMenuHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BulmaMenuHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
