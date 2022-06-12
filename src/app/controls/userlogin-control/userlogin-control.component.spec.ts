import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserloginControlComponent } from './userlogin-control.component';

describe('UserloginControlComponent', () => {
  let component: UserloginControlComponent;
  let fixture: ComponentFixture<UserloginControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserloginControlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserloginControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
