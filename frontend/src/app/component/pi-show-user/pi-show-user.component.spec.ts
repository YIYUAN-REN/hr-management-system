import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PiShowUserComponent } from './pi-show-user.component';

describe('PiShowUserComponent', () => {
  let component: PiShowUserComponent;
  let fixture: ComponentFixture<PiShowUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PiShowUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PiShowUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
