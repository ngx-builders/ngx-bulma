import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MessageContentComponent } from './message-content.component';

describe('MessageContentComponent', () => {
  let component: MessageContentComponent;
  let fixture: ComponentFixture<MessageContentComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [MessageContentComponent],
      }).compileComponents();
    }),
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
