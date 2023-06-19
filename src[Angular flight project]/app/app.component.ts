import { Component } from '@angular/core';
import { FlightserviceService } from './flightservice.service';

@Component({
  selector: 'app-root',
  providers:[FlightserviceService],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private flight: FlightserviceService) { }
  title = 'FlightProjectAngular';
}
