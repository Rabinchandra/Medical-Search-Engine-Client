import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminManageAppointmentsComponent } from './admin-manage-appointments.component';

describe('AdminManageAppointmentsComponent', () => {
  let component: AdminManageAppointmentsComponent;
  let fixture: ComponentFixture<AdminManageAppointmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminManageAppointmentsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminManageAppointmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
