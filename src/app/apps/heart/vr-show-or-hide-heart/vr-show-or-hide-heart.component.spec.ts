import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VRShowOrHideHeartComponent } from './vr-show-or-hide-heart.component';

describe('ShowMuscleBtnComponent', () => {
  let component: VRShowOrHideHeartComponent;
  let fixture: ComponentFixture<VRShowOrHideHeartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VRShowOrHideHeartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VRShowOrHideHeartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
