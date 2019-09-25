import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BulamMessageHeaderComponent } from './bulam-message-header.component';

describe('BulamMessageHeaderComponent', () => {
  let component: BulamMessageHeaderComponent;
  let fixture: ComponentFixture<BulamMessageHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BulamMessageHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BulamMessageHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
