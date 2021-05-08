import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SrBasicInfoComponent } from './sr-basic-info.component';

describe('SrBasicInfoComponent', () => {
  let component: SrBasicInfoComponent;
  let fixture: ComponentFixture<SrBasicInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SrBasicInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SrBasicInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
