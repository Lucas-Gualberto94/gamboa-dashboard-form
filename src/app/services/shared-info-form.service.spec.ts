import { TestBed } from '@angular/core/testing';

import { SharedInfoFormService } from './shared-info-form.service';

describe('SharedInfoFormService', () => {
  let service: SharedInfoFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SharedInfoFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
