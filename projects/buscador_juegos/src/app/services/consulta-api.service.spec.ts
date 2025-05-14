import { TestBed } from '@angular/core/testing';

import { ConsultaAPIService } from './consulta-api.service';

describe('ConsultaAPIService', () => {
  let service: ConsultaAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsultaAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
