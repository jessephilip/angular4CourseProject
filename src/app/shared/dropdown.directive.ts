import { Directive, ElementRef, HostBinding, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
	selector: '[appDropdown]'
})
export class DropdownDirective {

	@HostBinding('class.open') isOpen = false;
	@HostListener('click') toggleOpen() {
		this.isOpen = !this.isOpen; 
	}

	// TRIAL Code. What I came up with myself
	// @Input() set appDropdown(value: boolean) {
	// 	if (value) { this.renderer.addClass(this.elementRef.nativeElement, 'open'); }
	// 	else { this.renderer.removeClass(this.elementRef.nativeElement, 'open'); }
	// }
	
	constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

}
