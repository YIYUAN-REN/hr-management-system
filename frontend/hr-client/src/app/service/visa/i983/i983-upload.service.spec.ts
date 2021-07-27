import { TestBed } from '@angular/core/testing';

import { I983UploadService } from './i983-upload.service';

describe('I983UploadService', () => {
  let service: I983UploadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(I983UploadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
