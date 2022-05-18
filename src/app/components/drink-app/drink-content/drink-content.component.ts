import { Drink } from './../../../models/drink';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'drink-content',
  templateUrl: './drink-content.component.html',
  styleUrls: ['./drink-content.component.scss']
})
export class DrinkContentComponent implements OnInit {

  @Input('drink-list') _drinkList: Array<Drink>;

  // public _isSelecetdDrink: boolean = false;
  public _drinkSelected: Drink;

  constructor() { }

  ngOnInit(): void {
  }

  public onSelectDrink(drinkId: string): void {

    this._drinkSelected = this._drinkList.filter(drink => drink.Id == drinkId)[0];
  }

}
