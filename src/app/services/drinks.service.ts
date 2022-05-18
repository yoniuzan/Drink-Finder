import { Drink } from './../models/drink';
import { HttpService } from './http.service';
import { Injectable } from '@angular/core';
import { Api } from '../constants/api';
import { Convert } from '../Convert';
import { Observable, Subject } from 'rxjs';
import { Enums } from '../constants/enums';

@Injectable({
  providedIn: 'root'
})
export class DrinksService {

  // TODO Handle Errors
  private _allDrinks: Array<Drink>;
  private _randomDrink: Drink;
  private _ingredients: Array<string>;
  private _categories: Array<string>;

  private _drinkList: Subject<Array<Drink>>;

  constructor(private http: HttpService) {
    this._drinkList = new Subject<Array<Drink>>();
    this._ingredients = [];
    this._categories = [];
  }

  public registerOnSearchDrinks(): Observable<Array<Drink>> {
    return this._drinkList.asObservable();
  }

  public get AllDrinks(): Array<Drink> {
    return this._allDrinks;
  }

  public get Ingredients(): Array<string> {
    return this._ingredients;
  }

  public get Categories(): Array<string> {
    return this._categories;
  }

  public get Drink(): Drink {
    return this._randomDrink;
  }

  public loadDrinks(): Promise<any> {
    return this.http.get(Api.Drinks.Search, {}, Convert.GetDrinksList).then((res: Array<Drink>) => {
      this._allDrinks = res;
    }, (err) => {
      console.error(err)
    });
  }

  public getRandomDrink(): Promise<any> {
    return this.http.get(Api.Drinks.GetRandomDrink, {}, Convert.GetRandomDrink).then((res: Drink) => {
      this._randomDrink = res;
      return res;
    }, (err) => {
      console.error(err)
    });
  }

  public onSearchDrink(searchDrink: string): void {
    searchDrink.length == 1 ? this.searchByFirstLettar(searchDrink) : this.searchByName(searchDrink)
  }

  private searchByName(text: string): Promise<void> {
    const data = {
      s: text
    }

    return this.http.get(Api.Drinks.Search, data, Convert.GetDrinksList).then((res: Array<Drink>) => {
      this._drinkList.next(res);
      this._allDrinks = res;
    }, (err) => {
      console.error(err)
    });
  }

  public updateDrinkList(drinks: Array<Drink>): void {
    this._drinkList.next(drinks)
  }

  private searchByFirstLettar(text: string): Promise<void> {

    const data = {
      f: text
    }

    return this.http.get(Api.Drinks.Search, data, Convert.GetDrinksList).then((res: Array<Drink>) => {
      this._drinkList.next(res);
      this._allDrinks = res;
    }, (err) => {
      console.error(err)
    });
  }

  public onFilter(type: Enums.Filter) {
    switch (type) {
      case Enums.Filter.Category:
        this.getListCategory();
        break;

      case Enums.Filter.Ingredient:
        this.getListIngredient();
        break;

      default:
        break;
    }
  }

  private getListCategory(): Promise<any> {

    if (this._categories.length > 0)
      return;

    const data = {
      c: 'list'
    }

    return this.http.get(Api.Drinks.DrinkList, data, Convert.DrinkList).then((res: Array<string>) => {
      this._categories = res;
    }, (err) => {
      console.error(err)
    });
  }

  private getListIngredient(): Promise<void> {

    if (this._ingredients.length > 0)
      return;

    const data = {
      i: 'list'
    }

    return this.http.get(Api.Drinks.DrinkList, data, Convert.DrinkList).then((res: Array<string>) => {
      this._ingredients = res;
    }, (err) => {
      console.error(err)
    });

  }

  public onPressFilter(type: Enums.Filter, filterText: string) {
    switch (type) {
      case Enums.Filter.Category:
        this.onFilterCategory(filterText);
        break;

      case Enums.Filter.Ingredient:
        this.onFilterIngredient(filterText);
        break;

      default:
        break;
    }
  }

  private onFilterCategory(text: string): Promise<any> {
    if (!this._categories.includes(text)) {
      alert('Category Not Found');
      return;
    }

    const data = {
      c: text.replace(' ', '_')
    }

    return this.http.get(Api.Drinks.Filter, data, Convert.GetDrinksList).then((res: Array<Drink>) => {
      this._drinkList.next(res);
    }, (err) => {
      alert('Error to filter by Category');
    });
  }

  private onFilterIngredient(text: string): Promise<void> {

    if (!this._ingredients.includes(text)) {
      alert('Ingredient Not Found');
      return;
    }

    const data = {
      i: text.replace(' ', '_')
    }

    return this.http.get(Api.Drinks.Filter, data, Convert.DrinkList).then((res: Array<string>) => {
      this._ingredients = res;
    }, (err) => {
      alert('Error to filter by ingredient');
    });

  }

  public sortByDate(date: string): void {
    const fromatDate = new Date(date);
    const drinksByDate: Array<Drink> = [];

    this._allDrinks.forEach(drink => {
      if(drink.Date.getFullYear() != fromatDate.getFullYear() || drink.Date.getMonth() != fromatDate.getMonth() || drink.Date.getDate() != fromatDate.getDate())
        return;
      
        drinksByDate.push(drink);
    });

    this._drinkList.next(drinksByDate);
  }
}


