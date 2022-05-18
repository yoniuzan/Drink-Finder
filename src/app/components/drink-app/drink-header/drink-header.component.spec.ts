import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrinkHeaderComponent } from './drink-header.component';

describe('DrinkHeaderComponent', () => {
  let component: DrinkHeaderComponent;
  let fixture: ComponentFixture<DrinkHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrinkHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrinkHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
