import { TestBed } from '@angular/core/testing';

import { AgendaServiceService } from './agenda-service.service';

describe('AgendaServiceService', () => {
  let service: AgendaServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AgendaServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
