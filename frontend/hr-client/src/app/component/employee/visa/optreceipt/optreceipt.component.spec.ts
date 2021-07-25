import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptreceiptComponent } from './optreceipt.component';

describe('OptreceiptComponent', () => {
  let component: OptreceiptComponent;
  let fixture: ComponentFixture<OptreceiptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OptreceiptComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OptreceiptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
