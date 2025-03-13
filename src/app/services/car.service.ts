import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  private cars = [
    { id: 1, name: 'Tesla Model 3', price: 100 },
    { id: 2, name: 'BMW i8', price: 200 }
  ];

  getCars(): Observable<any[]> {
    return of(this.cars);
  }
}
