import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BulmaBoxComponent } from './box.component';

describe('BoxComponent', () => {
  let component: BulmaBoxComponent;
  let fixture: ComponentFixture<BulmaBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BulmaBoxComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
