import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent {
  bookingForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.bookingForm = this.fb.group({
      name: ['', Validators.required],
      car: ['', Validators.required],
      date: ['', Validators.required]
    });
  }

  bookCar() {
    console.log(this.bookingForm.value);
  }
}
