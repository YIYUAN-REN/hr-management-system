import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaitforhrComponent } from './waitforhr.component';

describe('WaitforhrComponent', () => {
  let component: WaitforhrComponent;
  let fixture: ComponentFixture<WaitforhrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WaitforhrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WaitforhrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
