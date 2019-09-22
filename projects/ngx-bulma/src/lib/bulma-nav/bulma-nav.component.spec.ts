import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BulmaNavComponent } from './bulma-nav.component';

describe('BulmaNavComponent', () => {
  let component: BulmaNavComponent;
  let fixture: ComponentFixture<BulmaNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BulmaNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BulmaNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
