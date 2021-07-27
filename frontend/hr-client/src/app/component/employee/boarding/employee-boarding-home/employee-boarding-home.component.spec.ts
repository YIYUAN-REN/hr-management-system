import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeBoardingHomeComponent } from './employee-boarding-home.component';

describe('EmployeeBoardingHomeComponent', () => {
  let component: EmployeeBoardingHomeComponent;
  let fixture: ComponentFixture<EmployeeBoardingHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeBoardingHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeBoardingHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
