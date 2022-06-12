import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackScreenComponent } from './track-screen.component';

describe('TrackScreenComponent', () => {
  let component: TrackScreenComponent;
  let fixture: ComponentFixture<TrackScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrackScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
