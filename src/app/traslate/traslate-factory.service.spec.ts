import { TestBed } from '@angular/core/testing';

import { TraslateFactoryService } from './traslate-factory.service';

describe('TraslateFactoryService', () => {
  let service: TraslateFactoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TraslateFactoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
