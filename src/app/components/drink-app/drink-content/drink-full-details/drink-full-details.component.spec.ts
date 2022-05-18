import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrinkFullDetailsComponent } from './drink-full-details.component';

describe('DrinkFullDetailsComponent', () => {
  let component: DrinkFullDetailsComponent;
  let fixture: ComponentFixture<DrinkFullDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrinkFullDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrinkFullDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
