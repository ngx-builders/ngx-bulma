import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelTitleComponent } from './model-title.component';

describe('ModelTitleComponent', () => {
  let component: ModelTitleComponent;
  let fixture: ComponentFixture<ModelTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModelTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
