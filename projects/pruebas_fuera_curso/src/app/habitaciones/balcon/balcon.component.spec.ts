import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BalconComponent } from './balcon.component';

describe('BalconComponent', () => {
  let component: BalconComponent;
  let fixture: ComponentFixture<BalconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BalconComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BalconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
