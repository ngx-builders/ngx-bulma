import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BulmaBreadcrumbComponent } from './breadcrumb.component';

describe('BulmaBreadcrumbComponent', () => {
  let component: BulmaBreadcrumbComponent;
  let fixture: ComponentFixture<BulmaBreadcrumbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BulmaBreadcrumbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BulmaBreadcrumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
