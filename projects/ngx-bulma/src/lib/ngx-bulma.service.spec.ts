import { TestBed } from '@angular/core/testing';

import { NgxBulmaService } from './ngx-bulma.service';

describe('NgxBulmaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxBulmaService = TestBed.get(NgxBulmaService);
    expect(service).toBeTruthy();
  });
});
