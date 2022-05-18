import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrinkContentComponent } from './drink-content.component';

describe('DrinkContentComponent', () => {
  let component: DrinkContentComponent;
  let fixture: ComponentFixture<DrinkContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrinkContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrinkContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
