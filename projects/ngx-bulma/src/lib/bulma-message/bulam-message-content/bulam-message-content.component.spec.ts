import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BulamMessageContentComponent } from './bulam-message-content.component';

describe('BulamMessageContentComponent', () => {
  let component: BulamMessageContentComponent;
  let fixture: ComponentFixture<BulamMessageContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BulamMessageContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BulamMessageContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
