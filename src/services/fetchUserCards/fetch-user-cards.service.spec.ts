import { TestBed } from '@angular/core/testing';

import { FetchUserCardsService } from './fetch-user-cards.service';

describe('FetchUserCardsService', () => {
  let service: FetchUserCardsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchUserCardsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
