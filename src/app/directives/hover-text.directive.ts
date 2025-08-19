import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHoverText]',
})
export class HoverTextDirective {
  constructor(private el: ElementRef) {}

  @HostListener('mouseover')
  onMouseEnter() {
    this.el.nativeElement.classList.add('hoveredbg');
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    // this.el.nativeElement.style.border = null;
    this.el.nativeElement.classList.remove('hoveredbg');
  }
}
