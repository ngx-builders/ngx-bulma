import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxBulmaComponent } from './ngx-bulma.component';

describe('NgxBulmaComponent', () => {
  let component: NgxBulmaComponent;
  let fixture: ComponentFixture<NgxBulmaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxBulmaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxBulmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
