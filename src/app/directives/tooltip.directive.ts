import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appTooltip]',
})
export class TooltipDirective {
  @Input('appTooltip') text!: string;
  @Input() tooltipPosition!: 'top' | 'bottom' | 'left' | 'right';
  @Input() tooltipBgColor!: string;
  @Input() tooltipFontSize!: string;
  private tooltipElement: HTMLElement | null = null;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseover')
  onMouseHover() {
    this.el.nativeElement.style.position = 'relative';
    if (!this.tooltipElement) {
      this.createTooltip();
    }
  }

  createTooltip() {
    this.tooltipElement = this.renderer.createElement('span');
    const textNode = this.renderer.createText(this.text);
    this.renderer.appendChild(this.tooltipElement, textNode); // where,what

    this.renderer.setStyle(this.tooltipElement, 'position', 'absolute');
    this.renderer.setStyle(
      this.tooltipElement,
      'background',
      this.tooltipBgColor
    );
    this.renderer.setStyle(this.tooltipElement, 'color', '#fff');
    this.renderer.setStyle(this.tooltipElement, 'padding', '4px 8px');
    this.renderer.setStyle(this.tooltipElement, 'border-radius', '4px');

    this.renderer.setStyle(
      this.tooltipElement,
      'font-size',
      this.tooltipFontSize
    );
    this.renderer.setStyle(this.tooltipElement, 'white-space', 'nowrap');
    this.renderer.setStyle(this.tooltipElement, 'z-index', '1000');

    switch (this.tooltipPosition) {
      case 'bottom':
        this.renderer.setStyle(this.tooltipElement, 'top', `130%`);
        this.renderer.setStyle(this.tooltipElement, 'left', `50%`);
        this.renderer.setStyle(
          this.tooltipElement,
          'transform',
          `translateX(-50%)`
        );
        break;
      case 'left':
        this.renderer.setStyle(this.tooltipElement, 'right', `130%`);
        this.renderer.setStyle(this.tooltipElement, 'top', `50%`);
        this.renderer.setStyle(
          this.tooltipElement,
          'transform',
          `translateY(-50%)`
        );
        break;
      case 'right':
        this.renderer.setStyle(this.tooltipElement, 'left', `130%`);
        this.renderer.setStyle(this.tooltipElement, 'top', `50%`);
        this.renderer.setStyle(
          this.tooltipElement,
          'transform',
          `translateY(-50%)`
        );
        break;
      default: // top
        this.renderer.setStyle(this.tooltipElement, 'bottom', `130%`);
        this.renderer.setStyle(
          this.tooltipElement,
          'transform',
          `translateX(-50%)`
        );
        this.renderer.setStyle(this.tooltipElement, 'left', `50%`);
        break;
    }

    this.renderer.appendChild(this.el.nativeElement, this.tooltipElement);
  }
  @HostListener('mouseleave')
  onMouseLeave() {
    if (this.tooltipElement) {
      this.renderer.removeChild(this.el.nativeElement, this.tooltipElement);
      this.tooltipElement = null;
    }
  }
}
