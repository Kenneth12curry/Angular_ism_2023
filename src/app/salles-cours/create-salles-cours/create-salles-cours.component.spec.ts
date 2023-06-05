import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSallesCoursComponent } from './create-salles-cours.component';

describe('CreateSallesCoursComponent', () => {
  let component: CreateSallesCoursComponent;
  let fixture: ComponentFixture<CreateSallesCoursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateSallesCoursComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateSallesCoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
