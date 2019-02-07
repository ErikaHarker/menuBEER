import { TestBed } from '@angular/core/testing';

import { DataBeerService } from './data-beer.service';

describe('DataBeerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataBeerService = TestBed.get(DataBeerService);
    expect(service).toBeTruthy();
  });
});
