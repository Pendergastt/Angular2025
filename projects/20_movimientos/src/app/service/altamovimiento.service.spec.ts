import { TestBed } from '@angular/core/testing';

import { AltamovimientoService } from './altamovimiento.service';

describe('AltamovimientoService', () => {
  let service: AltamovimientoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AltamovimientoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
