import { Ingredient } from "app/shared/ingredient.model";
import { Subject } from "rxjs/Subject";

export class ShoppingListService {
    ingredientsChanged = new Subject<Ingredient[]>();

    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 5)
    ];

    getIngredients() {
        return this.ingredients.slice();
    }

    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    addIngredients(ingredients: Ingredient[]) {
        for (let ingredient of ingredients) {
            var found: boolean = false;
            for (let ingredietLocal of this.ingredients) {
                if (ingredient.name === ingredietLocal.name) {
                    ingredietLocal.amount = ingredietLocal.amount + ingredient.amount;
                    found = true;
                    break;
                }
            }
            if (!found) {
                this.ingredients.push(ingredient);
            }
        }
        // this.ingredients.push(...ingredients);
        this.ingredientsChanged.next(this.ingredients.slice());
    }
}