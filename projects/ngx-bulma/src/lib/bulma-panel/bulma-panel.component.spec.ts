import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BulmaPanelComponent } from './bulma-panel.component';

describe('BulmaPanelComponent', () => {
  let component: BulmaPanelComponent;
  let fixture: ComponentFixture<BulmaPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BulmaPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BulmaPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
