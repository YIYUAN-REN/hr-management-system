import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptstemreceiptComponent } from './optstemreceipt.component';

describe('OptstemreceiptComponent', () => {
  let component: OptstemreceiptComponent;
  let fixture: ComponentFixture<OptstemreceiptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OptstemreceiptComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OptstemreceiptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
