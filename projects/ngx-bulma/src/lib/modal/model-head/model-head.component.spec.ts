import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelHeadComponent } from './model-head.component';

describe('ModelHeadComponent', () => {
  let component: ModelHeadComponent;
  let fixture: ComponentFixture<ModelHeadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModelHeadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelHeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
