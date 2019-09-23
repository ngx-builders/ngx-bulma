import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BulmaOptionsComponent } from './bulma-options.component';

describe('BulmaOptionsComponent', () => {
  let component: BulmaOptionsComponent;
  let fixture: ComponentFixture<BulmaOptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BulmaOptionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BulmaOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
