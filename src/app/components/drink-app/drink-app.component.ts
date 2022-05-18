import { Drink } from './../../models/drink';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { DrinksService } from 'src/app/services/drinks.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'drink-app',
  templateUrl: './drink-app.component.html',
  styleUrls: ['./drink-app.component.scss']
})
export class DrinkAppComponent implements OnInit, OnDestroy {

  public _drinkList: Array<Drink> = [];
  private _subscriptions: Array<Subscription>;

  constructor(private _drinksService: DrinksService) {
    this.registerEvents();
  }

  public registerEvents(): void {
    const subscriptions: Array<Subscription> = [];

    subscriptions.push(this._drinksService.registerOnSearchDrinks().subscribe((drinks: Array<Drink>) => {
      this._drinkList = drinks;
    }));

    this._subscriptions = subscriptions;
  }

  public async ngOnInit(): Promise<void> {
    this.loadRandomDrink();
  }

  private async loadRandomDrink(): Promise<void> {
    const randomDrink: Drink = await this._drinksService.getRandomDrink()
    this._drinkList.push(randomDrink);
  }

  public ngOnDestroy(): void {
    this._subscriptions.forEach((sub) => sub.unsubscribe());
    this._subscriptions = [];
  }

}
