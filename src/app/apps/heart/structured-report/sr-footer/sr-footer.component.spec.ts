import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SrFooterComponent } from './sr-footer.component';

describe('SrFooterComponent', () => {
  let component: SrFooterComponent;
  let fixture: ComponentFixture<SrFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SrFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SrFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
