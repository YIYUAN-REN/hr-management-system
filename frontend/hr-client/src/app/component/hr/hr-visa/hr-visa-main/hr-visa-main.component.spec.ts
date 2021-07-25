import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HrVisaMainComponent } from './hr-visa-main.component';

describe('HrVisaMainComponent', () => {
  let component: HrVisaMainComponent;
  let fixture: ComponentFixture<HrVisaMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HrVisaMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HrVisaMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
