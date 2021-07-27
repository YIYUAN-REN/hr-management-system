import { TestBed } from '@angular/core/testing';

import { I20UploadService } from './i20-upload.service';

describe('I20UploadService', () => {
  let service: I20UploadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(I20UploadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
