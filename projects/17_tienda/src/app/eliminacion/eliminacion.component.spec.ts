import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminacionComponent } from './eliminacion.component';

describe('EliminacionComponent', () => {
  let component: EliminacionComponent;
  let fixture: ComponentFixture<EliminacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EliminacionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EliminacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
