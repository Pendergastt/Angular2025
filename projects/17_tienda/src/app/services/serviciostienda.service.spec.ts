import { TestBed } from '@angular/core/testing';

import { ServiciostiendaService } from './serviciostienda.service';

describe('ServiciostiendaService', () => {
  let service: ServiciostiendaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiciostiendaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
