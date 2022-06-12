import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinestatControlComponent } from './linestat-control.component';

describe('LinestatControlComponent', () => {
  let component: LinestatControlComponent;
  let fixture: ComponentFixture<LinestatControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinestatControlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LinestatControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
