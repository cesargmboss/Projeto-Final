import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LancamentoComponent } from './lancamento';

describe('Lancamento', () => {
  let component: LancamentoComponent;
  let fixture: ComponentFixture<LancamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LancamentoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LancamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
