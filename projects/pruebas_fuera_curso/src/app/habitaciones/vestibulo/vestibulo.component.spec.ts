import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VestibuloComponent } from './vestibulo.component';

describe('VestibuloComponent', () => {
  let component: VestibuloComponent;
  let fixture: ComponentFixture<VestibuloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VestibuloComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VestibuloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
