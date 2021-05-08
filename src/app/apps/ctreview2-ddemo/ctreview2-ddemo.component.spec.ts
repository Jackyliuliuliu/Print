import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CTReview2DDemoComponent } from './ctreview2-ddemo.component';

describe('CTReview2DDemoComponent', () => {
  let component: CTReview2DDemoComponent;
  let fixture: ComponentFixture<CTReview2DDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CTReview2DDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CTReview2DDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
