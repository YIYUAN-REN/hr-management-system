import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscardChangesAlertDialogComponent } from './discard-changes-alert-dialog.component';

describe('DiscardChangesAlertDialogComponent', () => {
  let component: DiscardChangesAlertDialogComponent;
  let fixture: ComponentFixture<DiscardChangesAlertDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiscardChangesAlertDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscardChangesAlertDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
