import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BulmaCardCardImageComponent } from './card-image.component';

describe('BulmaCardCardImageComponent', () => {
  let component: BulmaCardCardImageComponent;
  let fixture: ComponentFixture<BulmaCardCardImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BulmaCardCardImageComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BulmaCardCardImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
