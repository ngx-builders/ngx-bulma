import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DocNavbarComponent } from './doc-navbar.component';

describe('DocNavbarComponent', () => {
  let component: DocNavbarComponent;
  let fixture: ComponentFixture<DocNavbarComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [DocNavbarComponent],
      }).compileComponents();
    }),
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(DocNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
