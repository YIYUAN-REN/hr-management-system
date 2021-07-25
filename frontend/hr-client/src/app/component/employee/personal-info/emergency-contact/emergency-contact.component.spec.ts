import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PiEmergencyContactComponent } from './emergency-contact.component';

describe('EmergencyContactComponent', () => {
  let component: PiEmergencyContactComponent;
  let fixture: ComponentFixture<PiEmergencyContactComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PiEmergencyContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PiEmergencyContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
