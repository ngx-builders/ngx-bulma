import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BulmaPanelHeadingComponent } from './panel-heading.component';

describe('BulmaPanelHeadingComponent', () => {
  let component: BulmaPanelHeadingComponent;
  let fixture: ComponentFixture<BulmaPanelHeadingComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [BulmaPanelHeadingComponent],
      }).compileComponents();
    }),
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(BulmaPanelHeadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
