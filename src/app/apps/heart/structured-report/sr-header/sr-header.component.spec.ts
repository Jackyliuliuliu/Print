import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SrHeaderComponent } from './sr-header.component';

describe('SrHeaderComponent', () => {
  let component: SrHeaderComponent;
  let fixture: ComponentFixture<SrHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SrHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SrHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
