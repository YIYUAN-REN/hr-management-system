import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PiNameComponent } from './name.component';

describe('NameComponent', () => {
  let component: PiNameComponent;
  let fixture: ComponentFixture<PiNameComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PiNameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PiNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
