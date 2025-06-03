import { TestBed } from '@angular/core/testing';

import { MatricularService } from './matricular.service';

describe('MatricularService', () => {
  let service: MatricularService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MatricularService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
