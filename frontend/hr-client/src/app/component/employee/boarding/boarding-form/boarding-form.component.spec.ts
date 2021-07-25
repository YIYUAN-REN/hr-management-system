import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardingFormComponent } from './boarding-form.component';

describe('BoardingFormComponent', () => {
  let component: BoardingFormComponent;
  let fixture: ComponentFixture<BoardingFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoardingFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardingFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
