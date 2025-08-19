import { Component } from '@angular/core';
import { DataCenterService } from './core/services/data-center.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  actual = '';
  filtered = '';
  text: string = 'Hello World';
  position: 'top' | 'bottom' | 'left' | 'right' = 'top';
  bgColor: string = 'silver';
  fontSize: string = '14';

  constructor(private dataService: DataCenterService) {
    this.dataService.actual$.subscribe((val) => (this.actual = val));
    this.dataService.filtered$.subscribe((val) => (this.filtered = val));
  }
}
