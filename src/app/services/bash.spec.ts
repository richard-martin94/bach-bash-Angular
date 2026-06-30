import { TestBed } from '@angular/core/testing';

import { Bash } from './bash';

describe('Bash', () => {
  let service: Bash;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Bash);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
