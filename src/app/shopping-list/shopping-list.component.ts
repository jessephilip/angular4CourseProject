import { Component, OnInit } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';

@Component({
	selector: 'app-shopping-list',
	templateUrl: './shopping-list.component.html',
	styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {

	private _ingredients: Ingredient[] = [
		new Ingredient('Flour', 2),
		new Ingredient('Salt', 3),
		new Ingredient('Water', 2)
	];
	public get ingredients(): Ingredient[] { return this._ingredients; }
	public set ingredients(ingredients: Ingredient[]) { this._ingredients = ingredients; }

	constructor() { }

	ngOnInit() { }

	private receive(ingredient) {
		this.ingredients.push(ingredient);
	}

}
