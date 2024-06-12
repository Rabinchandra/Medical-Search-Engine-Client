import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultDoctorComponent } from './consult-doctor.component';

describe('ConsultDoctorComponent', () => {
  let component: ConsultDoctorComponent;
  let fixture: ComponentFixture<ConsultDoctorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultDoctorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConsultDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
