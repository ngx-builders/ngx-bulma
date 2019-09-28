import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelContentComponent } from './model-content.component';

describe('ModelContentComponent', () => {
  let component: ModelContentComponent;
  let fixture: ComponentFixture<ModelContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModelContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
