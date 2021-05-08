import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SrFindingsComponent } from './sr-findings.component';

describe('SrFindingsComponent', () => {
  let component: SrFindingsComponent;
  let fixture: ComponentFixture<SrFindingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SrFindingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SrFindingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
