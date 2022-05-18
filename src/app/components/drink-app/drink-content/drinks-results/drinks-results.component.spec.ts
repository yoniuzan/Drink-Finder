import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrinksResultsComponent } from './drinks-results.component';

describe('DrinksResultsComponent', () => {
  let component: DrinksResultsComponent;
  let fixture: ComponentFixture<DrinksResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrinksResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrinksResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
