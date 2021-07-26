import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeHousingHomeComponent } from './employee-housing-home.component';

describe('EmployeeHousingHomeComponent', () => {
  let component: EmployeeHousingHomeComponent;
  let fixture: ComponentFixture<EmployeeHousingHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeHousingHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeHousingHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
