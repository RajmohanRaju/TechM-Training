import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CarListComponent } from './components/car-list/car-list.component';
import { BookingComponent } from './components/booking/booking.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'cars', component: CarListComponent },
  { path: 'booking', component: BookingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
