import { DrinksService } from 'src/app/services/drinks.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'drink-sort-date',
  templateUrl: './drink-sort-date.component.html',
  styleUrls: ['./drink-sort-date.component.scss']
})
export class DrinkSortDateComponent implements OnInit {

  constructor(private _drinkService: DrinksService) { }

  ngOnInit(): void {

  }

  public selectDate(date: string): void {
    this._drinkService.sortByDate(date);
  }

}
