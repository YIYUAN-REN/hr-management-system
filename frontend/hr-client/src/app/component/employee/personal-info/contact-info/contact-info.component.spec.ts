import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ContactinfoComponent } from './contact-info.component';

describe('ContactInfoComponent', () => {
  let component: ContactinfoComponent;
  let fixture: ComponentFixture<ContactinfoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
