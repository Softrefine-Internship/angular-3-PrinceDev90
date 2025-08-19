import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataCenterService {
  constructor() {}

  private actualSource = new BehaviorSubject<string>('');
  private filteredSource = new BehaviorSubject<string>('');

  actual$ = this.actualSource.asObservable();
  filtered$ = this.filteredSource.asObservable();

  updateValues(actual: string, filtered: string) {
    this.actualSource.next(actual);
    this.filteredSource.next(filtered);
  }
}
