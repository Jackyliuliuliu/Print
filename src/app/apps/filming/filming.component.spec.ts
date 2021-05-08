import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmingComponent } from './filming.component';

describe('FilmingComponent', () => {
  let component: FilmingComponent;
  let fixture: ComponentFixture<FilmingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilmingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
