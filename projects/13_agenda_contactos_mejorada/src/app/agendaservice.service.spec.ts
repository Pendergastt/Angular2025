import { TestBed } from '@angular/core/testing';

import { AgendaCompletaService } from './AgendaCompletaService';

describe('AgendaCompletaService', () => {
  let service: AgendaCompletaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AgendaCompletaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
