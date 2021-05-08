import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SrCommentsComponent } from './sr-comments.component';

describe('SrCommentsComponent', () => {
  let component: SrCommentsComponent;
  let fixture: ComponentFixture<SrCommentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SrCommentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SrCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
