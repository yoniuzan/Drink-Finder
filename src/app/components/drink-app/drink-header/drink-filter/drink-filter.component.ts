import { DrinksService } from 'src/app/services/drinks.service';
import { Drink } from './../../../../models/drink';
import { Component, Input, OnInit } from '@angular/core';
import { Enums } from 'src/app/constants/enums';
import { Observable, of } from 'rxjs';
import { debounceTime, mergeMap, filter, distinctUntilChanged, toArray } from 'rxjs/operators';

@Component({
  selector: 'drink-filter',
  templateUrl: './drink-filter.component.html',
  styleUrls: ['./drink-filter.component.scss']
})
export class DrinkFilterComponent implements OnInit {

  @Input('drinks-list') _drinksList: Array<Drink>;

  public categoriesAndIngredients = {};
  public _data$: Observable<Drink[]>;
  public _isEmpty = false;
  public _filterList: Array<Enums.Filter>;

  public _filterBy: Enums.Filter;
  public _filterText: string = '';

  constructor(private _drinksService: DrinksService) {
    this._filterList = Enums.Utils.getEnumValues(Enums.Filter).reverse();
    this._filterBy = this._filterList[0];
    this._data$ = of([]);
  }

  ngOnInit(): void {

  }

  public onSearch(text: string): void {
    if (!text)
      this._data$ = of(this._drinksService.AllDrinks);
    else {
      this._data$ = of(this._drinksService.AllDrinks).pipe(
        debounceTime(50),
        mergeMap(x => x),
        filter(item => this._filterBy == Enums.Filter.Category ? item.Category.toLowerCase() == text.toLowerCase() : item.Ingredients.indexOf(text) > -1),
        distinctUntilChanged(),
        toArray(),
      );

      this._data$.subscribe((res: Array<Drink>) => {
        if (res.length > 0) {
          this._isEmpty = false;
          setTimeout(() => {
            this._drinksService.updateDrinkList(res)
          }, 50);
        }
        else {
          this._drinksService.updateDrinkList(res)
          this._isEmpty = true;
        }
      });
    }
  }

  public async onSelectType(type: Enums.Filter): Promise<void> {
    if(this._filterBy == type) return;

    this._filterBy = type;
    await this._drinksService.onFilter(this._filterBy);
    this.onSearch(this._filterText)
  }

  public onPressFilter(): void {
    this._drinksService.onPressFilter(this._filterBy, this._filterText);
  }

}
