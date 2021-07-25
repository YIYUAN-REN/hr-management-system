import { TestBed } from '@angular/core/testing';

import { HrHousingHttpService } from './hr-housing-http.service';

describe('HrHousingHttpService', () => {
  let service: HrHousingHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HrHousingHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
