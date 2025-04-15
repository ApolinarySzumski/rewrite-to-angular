import { TestBed } from '@angular/core/testing';

import { FetchUserReposService } from './fetch-user-repos.service';

describe('FetchUserReposService', () => {
  let service: FetchUserReposService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchUserReposService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
