import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PkiControlComponent } from './pki-control.component';

describe('PkiControlComponent', () => {
  let component: PkiControlComponent;
  let fixture: ComponentFixture<PkiControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PkiControlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PkiControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
