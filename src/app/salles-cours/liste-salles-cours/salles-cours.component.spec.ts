import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SallesCoursComponent } from './salles-cours.component';

describe('SallesCoursComponent', () => {
  let component: SallesCoursComponent;
  let fixture: ComponentFixture<SallesCoursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SallesCoursComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SallesCoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
