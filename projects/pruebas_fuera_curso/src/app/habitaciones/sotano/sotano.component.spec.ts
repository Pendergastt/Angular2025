import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SotanoComponent } from './sotano.component';

describe('SotanoComponent', () => {
  let component: SotanoComponent;
  let fixture: ComponentFixture<SotanoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SotanoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SotanoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
