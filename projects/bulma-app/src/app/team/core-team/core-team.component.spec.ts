import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CoreTeamComponent } from './core-team.component';

describe('CoreTeamComponent', () => {
  let component: CoreTeamComponent;
  let fixture: ComponentFixture<CoreTeamComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [CoreTeamComponent],
      }).compileComponents();
    }),
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(CoreTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
