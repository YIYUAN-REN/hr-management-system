import { ComponentFixture, TestBed } from '@angular/core/testing';

import { I983templateComponent } from './i983template.component';

describe('I983templateComponent', () => {
  let component: I983templateComponent;
  let fixture: ComponentFixture<I983templateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ I983templateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(I983templateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
