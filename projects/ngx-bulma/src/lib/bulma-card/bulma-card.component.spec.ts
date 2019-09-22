import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BulmaCardComponent } from './bulma-card.component';

describe('CardComponent', () => {
  let component: BulmaCardComponent;
  let fixture: ComponentFixture<BulmaCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BulmaCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BulmaCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
