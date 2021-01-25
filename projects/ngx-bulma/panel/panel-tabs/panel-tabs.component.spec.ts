import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BulmaPanelTabsComponent } from './panel-tabs.component';

describe('BulmaPanelTabsComponent', () => {
  let component: BulmaPanelTabsComponent;
  let fixture: ComponentFixture<BulmaPanelTabsComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [BulmaPanelTabsComponent],
      }).compileComponents();
    }),
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(BulmaPanelTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
