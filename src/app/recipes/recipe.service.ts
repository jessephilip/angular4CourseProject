/**
 * Service that manages the recipes in the app
 *
 * @export RecipeService
 * @class RecipeService
 */

import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingService } from 'app/shopping-list/shopping.service';

@Injectable()
export class RecipeService {

	// notice the dual way of saying an array of recipes
	private _recipes: Recipe[] = [
		new Recipe('Dog Treat', 'A treat for dogs', 'http://placekitten.com/150/150', [new Ingredient('flour', 1), new Ingredient('eggs', 2)]),
		new Recipe('Cat Treat', 'A treat for cats', 'http://placekitten.com/150/150', [new Ingredient('salt', 1), new Ingredient('sugar', 2)]),
		// tslint:disable-next-line:max-line-length
		new Recipe('Turtle Treat', 'A treat for turtles', 'http://placekitten.com/150/150', [new Ingredient('fish', 1), new Ingredient('shrimp', 2)])
	];
	public get recipes(): Array<Recipe> { return this._recipes; };
	public set recipes(recipes: Array<Recipe>) { this._recipes = recipes; }

	public recipeSelected = new EventEmitter<Recipe>();

	constructor (private shoppingService: ShoppingService) {}

	public addIngredientsToShoppingList (ingredients: Ingredient[]) {
		this.shoppingService.addIngredients(ingredients);
	}
}
