import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComedorComponent } from './comedor.component';

describe('ComedorComponent', () => {
  let component: ComedorComponent;
  let fixture: ComponentFixture<ComedorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComedorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
