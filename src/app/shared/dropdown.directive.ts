import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from "@angular/core";

@Directive({
    selector: '[appDropdown]'
})

export class DropdownDirective implements OnInit {

    // my solution
    // @Input() dropdown: string = 'btn-group open';
    // @Input() clicked: boolean = false;

    // @HostBinding('class') open: string;
    
    // constructor(private elementRef: ElementRef, private renderer: Renderer2){
    // }

    // ngOnInit(): void {
    //     this.open = 'btn-group';
    // }

    // @HostListener('click') onClick(event: Event) {
    //     this.clicked = !this.clicked;
    //     this.clicked ?  this.open = this.dropdown : this.open = 'btn-group';
    // }
    // end of my solution

    @HostBinding('class.open') isOpen:boolean = false;

    @HostListener('click') toggleOpen() {
        this.isOpen = !this.isOpen;
    };

    ngOnInit(): void {
        
    }
}