import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvAppBaseComponent } from './adv-app-base.component';

describe('AdvAppBaseComponent', () => {
  let component: AdvAppBaseComponent;
  let fixture: ComponentFixture<AdvAppBaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvAppBaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvAppBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
