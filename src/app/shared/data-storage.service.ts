
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { RecipeService } from 'app/recipes/recipe.service';
import { Recipe } from 'app/recipes/recipe.model';
import 'rxjs/Rx';
import { Observable } from "rxjs/Observable";
@Injectable()
export class DataStorageService {
    constructor(private http: Http,
        private recipeService: RecipeService) { }

    storeRecipe() {
        return this.http.put('https://recipe-book-43ee9.firebaseio.com/recipe.json', this.recipeService.getRecipes())
    }

    getRecipes() {
        this.http.get('https://recipe-book-43ee9.firebaseio.com/recipe.json').map((response: Response) => {
            const recipes: Recipe[] = response.json();
            for (let recipe of recipes) {
                if (recipe['ingredients']) {
                    recipe['ingredients'] = [];
                }
            }
            return recipes;
        }).subscribe((recipes: Recipe[]) => {
            this.recipeService.setRecipes(recipes);
        });
    }
}