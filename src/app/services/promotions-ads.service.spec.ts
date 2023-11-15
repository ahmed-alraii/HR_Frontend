import { TestBed } from '@angular/core/testing';

import { PromotionsAdsService } from './promotions-ads.service';

describe('PromotionsAdsService', () => {
  let service: PromotionsAdsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PromotionsAdsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
