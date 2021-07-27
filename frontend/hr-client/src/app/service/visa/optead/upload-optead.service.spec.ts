import { TestBed } from '@angular/core/testing';

import { UploadOpteadService } from './upload-optead.service';

describe('UploadOpteadService', () => {
  let service: UploadOpteadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UploadOpteadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
