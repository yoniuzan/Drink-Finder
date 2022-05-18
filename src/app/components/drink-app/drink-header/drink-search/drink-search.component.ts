import { Constans } from './../../../../constants/constans';
import { DrinksService } from 'src/app/services/drinks.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'drink-search',
  templateUrl: './drink-search.component.html',
  styleUrls: ['./drink-search.component.scss']
})
export class DrinkSearchComponent implements OnInit {

  public _searchList: Array<string>;
  public _searchDrink: string;

  public _prevSearch: Array<string>;
  public _numberOfPrevSearch: number;

  constructor(private _drinkService: DrinksService) {
    this._searchList = [];
    this._prevSearch = [];
    this._numberOfPrevSearch = Constans.SearchDrinks.NumberOfPrevItems
  }

  ngOnInit(): void {
  }

  public onSearch(data: string) {
    this._searchDrink = data;

  }

  public onPressSearch(): void {
    if (this._searchDrink.length <= 0) return;

    this._prevSearch.unshift(this._searchDrink) // insert new item at the beginning
    if (this._prevSearch.length > Constans.SearchDrinks.NumberOfPrevItems)
      this._prevSearch.pop() // remove the extra element

    this._drinkService.onSearchDrink(this._searchDrink);
  }

  public onPrevSearch(prevSearch: string): void {
    this._searchDrink = prevSearch;
    this.onPressSearch();
  }

}
