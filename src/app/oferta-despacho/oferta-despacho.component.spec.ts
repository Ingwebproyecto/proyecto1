import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfertaDespachoComponent } from './oferta-despacho.component';

describe('OfertaDespachoComponent', () => {
  let component: OfertaDespachoComponent;
  let fixture: ComponentFixture<OfertaDespachoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfertaDespachoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OfertaDespachoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
