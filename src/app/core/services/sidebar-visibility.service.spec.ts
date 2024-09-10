import { TestBed } from '@angular/core/testing';

import { SidebarVisibilityService } from './sidebar-visibility.service';

describe('SidebarVisibilityService', () => {
  let service: SidebarVisibilityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SidebarVisibilityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
