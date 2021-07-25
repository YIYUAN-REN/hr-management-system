import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AlertDiscardChangesComponent } from './alert-discard-changes.component';

describe('AlertDiscardChangesComponent', () => {
  let component: AlertDiscardChangesComponent;
  let fixture: ComponentFixture<AlertDiscardChangesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AlertDiscardChangesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertDiscardChangesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
