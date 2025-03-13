import { Component } from '@angular/core';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent {
  cars = [
    { id: 1, name: 'Tesla Model 3', price: 100 },
    { id: 2, name: 'BMW i8', price: 200 }
  ];
}
