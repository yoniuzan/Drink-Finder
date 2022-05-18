import { Drink } from './../../../models/drink';
import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'drink-header',
  templateUrl: './drink-header.component.html',
  styleUrls: ['./drink-header.component.scss']
})
export class DrinkHeaderComponent implements OnInit {
  @Input("drink-list") _drinksList: Array<Drink>;

  constructor() { 
  }

  ngOnInit(): void {    
  }
}
