import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrinkSortDateComponent } from './drink-sort-date.component';

describe('DrinkSortDateComponent', () => {
  let component: DrinkSortDateComponent;
  let fixture: ComponentFixture<DrinkSortDateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrinkSortDateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrinkSortDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
