import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrinkAppComponent } from './drink-app.component';

describe('DrinkAppComponent', () => {
  let component: DrinkAppComponent;
  let fixture: ComponentFixture<DrinkAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrinkAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrinkAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
