import { TestBed } from '@angular/core/testing';

import { MemberCreateGuard } from './member-create.guard';

describe('MemberCreateGuard', () => {
  let guard: MemberCreateGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(MemberCreateGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
