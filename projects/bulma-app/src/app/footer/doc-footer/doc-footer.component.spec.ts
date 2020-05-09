import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocFooterComponent } from './doc-footer.component';

describe('DocFooterComponent', () => {
  let component: DocFooterComponent;
  let fixture: ComponentFixture<DocFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
