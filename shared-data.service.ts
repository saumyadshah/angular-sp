import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {
  private dataSubject = new BehaviorSubject<any[]>([]);
  public data$: Observable<any[]> = this.dataSubject.asObservable();

  constructor() { }

  getData() {
    return this.dataSubject.value;
  }

  updateData(updatedData: any[]) {
    this.dataSubject.next(updatedData);
  }
}
