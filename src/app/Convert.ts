import { Drink } from "./models/drink";

export class Convert {

    public static IGNORE(_: any): null {
        return null;
    }

    public static ANY(data: any): any {
        return data;
    }

    public static GetRandomDrink(data: any): Drink {
        const drink = new Drink();
        drink.fromServer(data.drinks[0]);
        return drink;
    }

    public static GetDrinksList(data: any): Array<Drink> {
        if(!data.drinks)
            return [];

        const drinks: Array<Drink> = [];
        data.drinks.forEach((drink: Drink) => {
            const newDrink = new Drink();
            newDrink.fromServer(drink);
            drinks.push(newDrink);
        });

        return drinks;
    }

    public static DrinkList(data: any): Array<string> {
        const arr = [];

        data.drinks.forEach(drink => {
            arr.push(drink.strCategory);
        });

        return arr;
      }
}