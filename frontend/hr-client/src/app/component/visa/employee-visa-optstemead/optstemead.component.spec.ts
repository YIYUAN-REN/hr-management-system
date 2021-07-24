import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptstemeadComponent } from './optstemead.component';

describe('OptstemeadComponent', () => {
  let component: OptstemeadComponent;
  let fixture: ComponentFixture<OptstemeadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OptstemeadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OptstemeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
