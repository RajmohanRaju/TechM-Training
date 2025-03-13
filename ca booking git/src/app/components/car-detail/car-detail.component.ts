import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent {
  @Input() car: any; // Receives car details from parent component

  bookCar() {
    alert(`Car booked: ${this.car.name}`);
  }
}
