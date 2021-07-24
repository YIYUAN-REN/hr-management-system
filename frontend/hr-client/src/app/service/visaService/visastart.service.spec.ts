import { TestBed } from '@angular/core/testing';

import { VisastartService } from './visastart.service';

describe('VisastartService', () => {
  let service: VisastartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VisastartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
