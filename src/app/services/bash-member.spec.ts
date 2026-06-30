import { TestBed } from '@angular/core/testing';

import { BashMember } from './bash-member';

describe('BashMember', () => {
  let service: BashMember;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BashMember);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
