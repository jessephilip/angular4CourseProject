import { Component, OnInit } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';
import { ShoppingService } from 'app/shopping-list/shopping.service';

@Component({
	selector: 'app-shopping-list',
	styleUrls: ['./shopping-list.component.scss'],
	templateUrl: './shopping-list.component.html'
})
export class ShoppingListComponent implements OnInit {
	private ingredients: Ingredient[];

	constructor (private shoppingService: ShoppingService) { }

	ngOnInit () {
		this.ingredients = this.shoppingService.ingredients;
	}

}
