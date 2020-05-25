import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreTeamComponent } from './core-team.component';

describe('CoreTeamComponent', () => {
  let component: CoreTeamComponent;
  let fixture: ComponentFixture<CoreTeamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CoreTeamComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoreTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
