import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SrImagesComponent } from './sr-images.component';

describe('SrImagesComponent', () => {
  let component: SrImagesComponent;
  let fixture: ComponentFixture<SrImagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SrImagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SrImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
