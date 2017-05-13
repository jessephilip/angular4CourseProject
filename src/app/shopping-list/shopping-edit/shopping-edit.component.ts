import { Component, ElementRef, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { Ingredient } from 'app/shared/ingredient.model';

@Component({
	selector: 'app-shopping-edit',
	templateUrl: './shopping-edit.component.html',
	styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit {

	@Output() emitIngredient = new EventEmitter<Ingredient>();
	@ViewChild('nameInput') nameInputRef: ElementRef;
	@ViewChild('amountInput') amountInputRef: ElementRef;

	constructor() { }

	ngOnInit() { }

	private onAddItem(): void {
		const ingredient: Ingredient = {
			name: this.nameInputRef.nativeElement.value,
			amount: this.amountInputRef.nativeElement.value
		};
		this.emitIngredient.emit(ingredient);
		this.nameInputRef.nativeElement.value = '';
		this.amountInputRef.nativeElement.value = '';
	}

}
