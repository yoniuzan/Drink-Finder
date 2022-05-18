import { Drink } from './../../../../models/drink';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'drinks-results',
  templateUrl: './drinks-results.component.html',
  styleUrls: ['./drinks-results.component.scss']
})
export class DrinksResultsComponent implements OnInit {

  @Output('on-select-drink') public _onSelectDrink = new EventEmitter<string>();

  @Input('drink-list') _drinkList: Array<Drink>;

  public _selectedDrinkId: string;

  constructor() {
    this._onSelectDrink = new EventEmitter<string>();
  }

  ngOnInit(): void {

  }

  public onSelectDrink(drinkId): void {
    this._selectedDrinkId = drinkId
    this._onSelectDrink.emit(drinkId);
  }

}
