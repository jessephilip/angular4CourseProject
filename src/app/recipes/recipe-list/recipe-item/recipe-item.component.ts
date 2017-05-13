import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Recipe } from '../../recipe.model';

@Component({
	selector: 'app-recipe-item',
	templateUrl: './recipe-item.component.html',
	styleUrls: ['./recipe-item.component.scss']
})
export class RecipeItemComponent implements OnInit {

	constructor() { }

	ngOnInit() {
	}

	@Input() recipe:Recipe;
	@Output() recipeSelected = new EventEmitter<void>();

	public onSelected():void {
		this.recipeSelected.emit();
	}

}
