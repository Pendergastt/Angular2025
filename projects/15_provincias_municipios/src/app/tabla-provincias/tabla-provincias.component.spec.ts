import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaProvinciasComponent } from './tabla-provincias.component';

describe('TablaProvinciasComponent', () => {
  let component: TablaProvinciasComponent;
  let fixture: ComponentFixture<TablaProvinciasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TablaProvinciasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablaProvinciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
