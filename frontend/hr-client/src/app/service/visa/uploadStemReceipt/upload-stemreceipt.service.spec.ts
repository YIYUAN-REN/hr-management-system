import { TestBed } from '@angular/core/testing';

import { UploadStemreceiptService } from './upload-stemreceipt.service';

describe('UploadStemreceiptService', () => {
  let service: UploadStemreceiptService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UploadStemreceiptService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
