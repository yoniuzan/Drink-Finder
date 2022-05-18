import { Drink } from './../../../../models/drink';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'drink-full-details',
  templateUrl: './drink-full-details.component.html',
  styleUrls: ['./drink-full-details.component.scss']
})
export class DrinkFullDetailsComponent implements OnInit {

  @Input('drink-selected') _drinkSelected: Drink;

  constructor() { }

  ngOnInit(): void {
  }

}
