import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

	// true for recipes false for shopping list
	@Output() featureSelected = new EventEmitter<string>();

	constructor() { }

	ngOnInit() { }

	onSelect(feature: string) {
		this.featureSelected.emit(feature);
	}

}
