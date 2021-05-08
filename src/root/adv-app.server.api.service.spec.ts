import { TestBed } from '@angular/core/testing';
import { AdvAppServerAPIService } from './adv-app.server.api.service';

describe('AdvAppService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdvAppServerAPIService = TestBed.get(AdvAppServerAPIService);
    expect(service).toBeTruthy();
  });
});
