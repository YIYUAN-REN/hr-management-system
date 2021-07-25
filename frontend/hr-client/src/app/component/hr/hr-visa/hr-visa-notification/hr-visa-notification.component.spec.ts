import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HrVisaNotificationComponent } from './hr-visa-notification.component';

describe('HrVisaNotificationComponent', () => {
  let component: HrVisaNotificationComponent;
  let fixture: ComponentFixture<HrVisaNotificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HrVisaNotificationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HrVisaNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
