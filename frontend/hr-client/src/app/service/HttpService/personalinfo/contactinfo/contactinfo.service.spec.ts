import { TestBed } from '@angular/core/testing';

import { ContactinfoService } from './contactinfo.service';

describe('ContactinfoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ContactinfoService = TestBed.get(ContactinfoService);
    expect(service).toBeTruthy();
  });
});
