import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BulmaPanelBlockComponent } from './panel-block.component';

describe('BulmaPanelBlockComponent', () => {
  let component: BulmaPanelBlockComponent;
  let fixture: ComponentFixture<BulmaPanelBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BulmaPanelBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BulmaPanelBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
