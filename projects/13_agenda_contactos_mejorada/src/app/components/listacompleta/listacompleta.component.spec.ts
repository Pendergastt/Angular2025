import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListacompletaComponent } from './listacompleta.component';

describe('ListacompletaComponent', () => {
  let component: ListacompletaComponent;
  let fixture: ComponentFixture<ListacompletaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListacompletaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListacompletaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
