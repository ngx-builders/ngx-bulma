import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelFooterComponent } from './model-footer.component';

describe('ModelFooterComponent', () => {
  let component: ModelFooterComponent;
  let fixture: ComponentFixture<ModelFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModelFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
