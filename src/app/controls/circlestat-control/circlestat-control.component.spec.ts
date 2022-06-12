import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CirclestatControlComponent } from './circlestat-control.component';

describe('CirclestatControlComponent', () => {
  let component: CirclestatControlComponent;
  let fixture: ComponentFixture<CirclestatControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CirclestatControlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CirclestatControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
