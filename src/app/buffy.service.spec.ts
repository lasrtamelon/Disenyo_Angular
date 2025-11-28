import { TestBed } from '@angular/core/testing';

import { BuffyService } from './buffy.service';

describe('BuffyService', () => {
  let service: BuffyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BuffyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
