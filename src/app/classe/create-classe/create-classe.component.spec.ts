import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateClasseComponent } from './create-classe.component';

describe('CreateClasseComponent', () => {
  let component: CreateClasseComponent;
  let fixture: ComponentFixture<CreateClasseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateClasseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateClasseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
