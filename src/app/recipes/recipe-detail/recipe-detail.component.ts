import { Component, Input, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';
import { RecipeService } from "app/recipes/recipe.service";

@Component({
	selector: 'app-recipe-detail',
	templateUrl: './recipe-detail.component.html',
	styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {

	@Input() recipe: Recipe;

	constructor (private recipeService: RecipeService) { }

	ngOnInit() { }

	private onAddToShoppingList () {
		this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
	}

}
