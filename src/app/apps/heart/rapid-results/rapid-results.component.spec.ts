import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RapidResultsComponent } from './rapid-results.component';

describe('RapidResultsComponent', () => {
  let component: RapidResultsComponent;
  let fixture: ComponentFixture<RapidResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RapidResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RapidResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
