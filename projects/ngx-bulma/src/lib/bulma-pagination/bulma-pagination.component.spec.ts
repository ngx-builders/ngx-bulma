import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BulmaPaginationComponent } from './bulma-pagination.component';

describe('BulmaPaginationComponent', () => {
  let component: BulmaPaginationComponent;
  let fixture: ComponentFixture<BulmaPaginationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BulmaPaginationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BulmaPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
