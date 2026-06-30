import { TestBed } from '@angular/core/testing';

import { Basher } from './basher';

describe('Basher', () => {
  let service: Basher;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Basher);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
