import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeVisaHomeComponent } from './employee-visa-home.component';

describe('EmployeeVisaHomeComponent', () => {
  let component: EmployeeVisaHomeComponent;
  let fixture: ComponentFixture<EmployeeVisaHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeVisaHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeVisaHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
