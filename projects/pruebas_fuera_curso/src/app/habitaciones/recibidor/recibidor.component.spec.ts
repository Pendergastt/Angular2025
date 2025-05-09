import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecibidorComponent } from './recibidor.component';

describe('RecibidorComponent', () => {
  let component: RecibidorComponent;
  let fixture: ComponentFixture<RecibidorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecibidorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecibidorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
