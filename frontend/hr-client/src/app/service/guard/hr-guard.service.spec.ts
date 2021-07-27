import { TestBed } from '@angular/core/testing';

import { HrGuardService } from './hr-guard.service';

describe('HrGuardService', () => {
  let service: HrGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HrGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
