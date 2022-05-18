import { Enums } from 'src/app/constants/enums';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'drinkFilter'
})
export class DrinkFilterPipe implements PipeTransform {


  public transform(type: Enums.Filter, args?: any): string {

    switch (type) {
      case Enums.Filter.Category:
        return 'Category'
      case Enums.Filter.Ingredient:
        return 'Ingredient'
      default:
        return '';
    }
  }

}
