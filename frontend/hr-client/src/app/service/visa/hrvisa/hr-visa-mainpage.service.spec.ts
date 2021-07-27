import { TestBed } from '@angular/core/testing';

import { HrVisaMainpageService } from './hr-visa-mainpage.service';

describe('HrVisaMainpageService', () => {
  let service: HrVisaMainpageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HrVisaMainpageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
