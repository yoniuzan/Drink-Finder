export class Drink {
    public Id: string;
    public Date: Date;
    public Name: string;
    public Image: string;
    public Category: string;
    public Glass: string;
    public Instructions: string;
    public Ingredients: Array<string>;


    public fromServer(other: any): void {
        this.Id = other.idDrink;
        // const newDate = new Date(other.dateModified);
        // this.Date = newDate.getFullYear() + '-' + newDate.getMonth() + '-' + newDate.getDay();
        
        this.Date = new Date(other.dateModified);
        this.Name = other.strDrink;
        this.Image = other.strDrinkThumb;
        this.Category = other.strCategory;
        this.Glass = other.strGlass;

        this.Instructions = other.strInstructions;

        const ingredients: Array<string> = [];
        for (let index = 1; index <= 15; index++) {
            ingredients.push(other['strIngredient' + index])
        }
        this.Ingredients = ingredients.filter(x => x);
    }
}