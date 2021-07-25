import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PiAddressComponent } from './address.component';

describe('AddressComponent', () => {
  let component: PiAddressComponent;
  let fixture: ComponentFixture<PiAddressComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PiAddressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PiAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
