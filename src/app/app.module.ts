import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component'; // Ensure this path is correct

@NgModule({
  declarations: [
    AppComponent,  // Your main component
    NavbarComponent // Your navbar component
  ],
  imports: [
    BrowserModule  // Essential for Angular apps
  ],
  providers: [],
  bootstrap: [AppComponent] // Ensures AppComponent is the entry point
})
export class AppModule { }
