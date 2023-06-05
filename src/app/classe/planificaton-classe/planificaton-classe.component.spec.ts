import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanificatonClasseComponent } from './planificaton-classe.component';

describe('PlanificatonClasseComponent', () => {
  let component: PlanificatonClasseComponent;
  let fixture: ComponentFixture<PlanificatonClasseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanificatonClasseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanificatonClasseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
