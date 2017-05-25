import { Component, OnInit } from '@angular/core';

import { Recipe } from './recipe.model';
import { RecipeService } from 'app/recipes/recipe.service';

@Component({
	providers: [RecipeService],
	selector: 'app-recipes',
	styleUrls: ['./recipes.component.scss'],
	templateUrl: './recipes.component.html'
})
export class RecipesComponent implements OnInit {

	private selectedRecipe: Recipe;

	constructor (private recipeService: RecipeService) {}

	ngOnInit () {
		this.recipeService.recipeSelected.subscribe((recipe: Recipe) => {
			this.selectedRecipe = recipe;
		});
	}

}
