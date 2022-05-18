import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrinkImageComponent } from './drink-image.component';

describe('DrinkImageComponent', () => {
  let component: DrinkImageComponent;
  let fixture: ComponentFixture<DrinkImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrinkImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrinkImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
