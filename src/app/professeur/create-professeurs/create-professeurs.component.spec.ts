import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateProfesseursComponent } from './create-professeurs.component';

describe('CreateProfesseursComponent', () => {
  let component: CreateProfesseursComponent;
  let fixture: ComponentFixture<CreateProfesseursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateProfesseursComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateProfesseursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
