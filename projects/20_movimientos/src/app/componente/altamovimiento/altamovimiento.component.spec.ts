import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AltamovimientoComponent } from './altamovimiento.component';

describe('AltamovimientoComponent', () => {
  let component: AltamovimientoComponent;
  let fixture: ComponentFixture<AltamovimientoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AltamovimientoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AltamovimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
