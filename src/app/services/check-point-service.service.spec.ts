import { TestBed } from '@angular/core/testing';

import { CheckPointServiceService } from './check-point-service.service';

describe('CheckPointServiceService', () => {
  let service: CheckPointServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CheckPointServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
