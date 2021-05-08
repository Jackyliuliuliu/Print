import { TestBed } from '@angular/core/testing';

import { HeartService } from './heart.service';

describe('HeartService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HeartService = TestBed.get(HeartService);
    expect(service).toBeTruthy();
  });
});
