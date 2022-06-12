import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackLogControlComponent } from './track-log-control.component';

describe('TrackLogControlComponent', () => {
  let component: TrackLogControlComponent;
  let fixture: ComponentFixture<TrackLogControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrackLogControlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackLogControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
