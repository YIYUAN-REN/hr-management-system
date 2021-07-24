import { TestBed } from '@angular/core/testing';

import { OptreceiptService } from './optreceipt.service';

describe('OptreceiptService', () => {
  let service: OptreceiptService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OptreceiptService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
