import { TestBed } from '@angular/core/testing';

import { UrnaSenderService } from './urna-sender.service';

describe('UrnaSenderService', () => {
  let service: UrnaSenderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UrnaSenderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
