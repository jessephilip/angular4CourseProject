import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Ingredient } from 'app/shared/ingredient.model';
import { ShoppingService } from 'app/shopping-list/shopping.service';

@Component({
	selector: 'app-shopping-edit',
	templateUrl: './shopping-edit.component.html',
	styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit {

	@ViewChild('nameInput') nameInputRef: ElementRef;
	@ViewChild('amountInput') amountInputRef: ElementRef;

	constructor (private shoppingService: ShoppingService) { }

	ngOnInit () {}

	private onAddItem(): void {
		const ingredient: Ingredient = {
			name: this.nameInputRef.nativeElement.value,
			amount: this.amountInputRef.nativeElement.value
		};

		this.shoppingService.addIngredient(ingredient);
		this.nameInputRef.nativeElement.value = '';
		this.amountInputRef.nativeElement.value = '';
	}

}
