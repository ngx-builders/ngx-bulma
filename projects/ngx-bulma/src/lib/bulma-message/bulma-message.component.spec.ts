import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BulmaMessageComponent } from './bulma-message.component';

describe('BulmaMessageComponent', () => {
  let component: BulmaMessageComponent;
  let fixture: ComponentFixture<BulmaMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BulmaMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BulmaMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
