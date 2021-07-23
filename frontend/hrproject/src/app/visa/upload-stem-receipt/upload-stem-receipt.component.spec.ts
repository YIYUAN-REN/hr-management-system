import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadStemReceiptComponent } from './upload-stem-receipt.component';

describe('UploadStemReceiptComponent', () => {
  let component: UploadStemReceiptComponent;
  let fixture: ComponentFixture<UploadStemReceiptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadStemReceiptComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadStemReceiptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
