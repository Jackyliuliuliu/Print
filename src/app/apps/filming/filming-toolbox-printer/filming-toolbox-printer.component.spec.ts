import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmingToolboxPrinterComponent } from './filming-toolbox-printer.component';

describe('FilmingToolboxPrinterComponent', () => {
  let component: FilmingToolboxPrinterComponent;
  let fixture: ComponentFixture<FilmingToolboxPrinterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilmingToolboxPrinterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmingToolboxPrinterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
