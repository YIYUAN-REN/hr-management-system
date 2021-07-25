import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherIdentityInfoComponent } from './other-identity-info.component';

describe('OtherIdentityInfoComponent', () => {
  let component: OtherIdentityInfoComponent;
  let fixture: ComponentFixture<OtherIdentityInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtherIdentityInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherIdentityInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
