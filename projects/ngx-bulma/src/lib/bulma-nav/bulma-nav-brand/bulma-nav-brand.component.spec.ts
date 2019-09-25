import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BulmaNavBrandComponent } from './bulma-nav-brand.component';

describe('BulmaNavBrandComponent', () => {
  let component: BulmaNavBrandComponent;
  let fixture: ComponentFixture<BulmaNavBrandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BulmaNavBrandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BulmaNavBrandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
