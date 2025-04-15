import { TestBed } from '@angular/core/testing';

import { AssignTeamBadgeService } from './assign-team-badge.service';

describe('AssignTeamBadgeService', () => {
  let service: AssignTeamBadgeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AssignTeamBadgeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
