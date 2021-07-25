import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpteadComponent } from './optead.component';

describe('OpteadComponent', () => {
  let component: OpteadComponent;
  let fixture: ComponentFixture<OpteadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpteadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpteadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
