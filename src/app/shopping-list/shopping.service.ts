import { EventEmitter } from '@angular/core';

import { Ingredient } from 'app/shared/ingredient.model';

export class ShoppingService {

	private _ingredients: Ingredient[] = [
		new Ingredient('Flour', 2),
		new Ingredient('Salt', 3),
		new Ingredient('Water', 2)
	];
	public get ingredients(): Ingredient[] { return this._ingredients; }
	public set ingredients(ingredients: Ingredient[]) { this._ingredients = ingredients; }

	public ingredientSelected = new EventEmitter<Ingredient>();

	public addIngredient (ingredient: Ingredient) {
		this.ingredients.push(ingredient);
	}

	public addIngredients (ingredients: Ingredient[]) {
		this.ingredients.push(...ingredients);
	}


}
