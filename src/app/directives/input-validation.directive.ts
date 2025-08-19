import { Directive, ElementRef, HostListener } from '@angular/core';
import { DataCenterService } from '../core/services/data-center.service';

@Directive({
  selector: '[appInputValidation]',
})
export class InputValidationDirective {
  constructor(private el: ElementRef, private dataService: DataCenterService) {}

  @HostListener('blur')
  onBlurInput() {
    const actual: string = this.el.nativeElement.value;
    const filtered: string = actual.trim().split(' ').join('');
    this.dataService.updateValues(actual, filtered);

    console.log('filtered value: ', filtered);
    console.log('actual value: ', actual);
  }
}
