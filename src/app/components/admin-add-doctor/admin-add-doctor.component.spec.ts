import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddDoctorComponent } from './admin-add-doctor.component';

describe('AdminAddDoctorComponent', () => {
  let component: AdminAddDoctorComponent;
  let fixture: ComponentFixture<AdminAddDoctorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminAddDoctorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminAddDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
