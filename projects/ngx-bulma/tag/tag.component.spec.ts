import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BulmaTagComponent } from './tag.component';

describe('BulmaFooterComponent', () => {
  let component: BulmaTagComponent;
  let fixture: ComponentFixture<BulmaTagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BulmaTagComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BulmaTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
