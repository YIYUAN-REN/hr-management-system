import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisastartComponent } from './visastart.component';

describe('VisastartComponent', () => {
  let component: VisastartComponent;
  let fixture: ComponentFixture<VisastartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisastartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VisastartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
