import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HireDetailComponent } from './hire-detail.component';

describe('HireDetailComponent', () => {
  let component: HireDetailComponent;
  let fixture: ComponentFixture<HireDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HireDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HireDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
