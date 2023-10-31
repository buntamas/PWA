import { Directive, ElementRef, HostBinding, HostListener, Input } from '@angular/core';

//#Directive - Own directive
@Directive({ selector: '[myDirective]' })
export class MyDirective {

    //#HostBinding
    @HostBinding('style.background-color') backgroundColor = 'grey';
    @HostBinding('style.opacity') opacity = 1;

    //#//#Data binding - Input()
    @Input() set defaultBackground(e: string) {
        this.backgroundColor = e;
    }


    constructor(element: ElementRef) {
        console.log(`directive's host element:`, element)
    }

    //#HostListener
    @HostListener('mouseenter')
    onMouseEnter(){
        this.opacity = 0.6;
    }
    @HostListener('mouseleave')
    onMouseOut() {
        this.opacity = 1;
    }
}
