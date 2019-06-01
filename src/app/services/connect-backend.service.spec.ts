import { TestBed } from '@angular/core/testing';

import { ConnectBackendService } from './connect-backend.service';

describe('ConnectBackendService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConnectBackendService = TestBed.get(ConnectBackendService);
    expect(service).toBeTruthy();
  });
});
