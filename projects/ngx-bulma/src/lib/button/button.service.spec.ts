import { TestBed } from '@angular/core/testing';

import { ButtonService } from './button.service';

describe('ButtonService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ButtonService = TestBed.get(ButtonService);
    expect(service).toBeTruthy();
  });
});
