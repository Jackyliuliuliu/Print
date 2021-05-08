import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmingToolboxEditerComponent } from './filming-toolbox-editer.component';

describe('FilmingToolboxEditerComponent', () => {
  let component: FilmingToolboxEditerComponent;
  let fixture: ComponentFixture<FilmingToolboxEditerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilmingToolboxEditerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmingToolboxEditerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
