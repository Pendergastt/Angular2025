import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuariosComponenteComponent } from './usuarios-componente.component';

describe('UsuariosComponenteComponent', () => {
  let component: UsuariosComponenteComponent;
  let fixture: ComponentFixture<UsuariosComponenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsuariosComponenteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsuariosComponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
