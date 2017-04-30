import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
	selector: 'app-recipe-list',
	templateUrl: './recipe-list.component.html',
	styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {

	// notice the dual way of saying an array of recipes
	private _recipes:Recipe[] = [
		new Recipe('Dog Treat', 'A treat for dogs', 'http://placekitten.com/150/150'),
		new Recipe('Cat Treat', 'A treat for cats', 'http://placekitten.com/150/150'),
		new Recipe('Turtle Treat', 'A treat for turtles', 'http://placekitten.com/150/150')
	];
	public get recipes():Array<Recipe> { return this._recipes; };
	public set recipes(recipes:Array<Recipe>) { this._recipes = recipes; }

	constructor() { }

	ngOnInit() { }

}
