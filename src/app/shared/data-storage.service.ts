
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { RecipeService } from 'app/recipes/recipe.service';
import { Recipe } from 'app/recipes/recipe.model';
import 'rxjs/Rx';
import { Observable } from "rxjs/Observable";
import { AuthService } from "app/auth/auth.service";

@Injectable()
export class DataStorageService {
    constructor(private http: Http,
        private recipeService: RecipeService, private authService: AuthService) { }

    storeRecipe() {
        const token = this.authService.getToken();
        return this.http.put('https://recipe-book-43ee9.firebaseio.com/recipe.json?auth=' + token, this.recipeService.getRecipes())
    }

    getRecipes() {
        const token = this.authService.getToken();
        this.http.get('https://recipe-book-43ee9.firebaseio.com/recipe.json?auth=' + token).map((response: Response) => {
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