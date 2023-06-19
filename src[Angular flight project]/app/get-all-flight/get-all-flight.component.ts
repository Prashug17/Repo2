import { Component } from '@angular/core';
import { FlightserviceService } from '../flightservice.service';

@Component({
  selector: 'app-get-all-flight',
  templateUrl: './get-all-flight.component.html',
  styleUrls: ['./get-all-flight.component.scss']
})
export class GetAllFlightComponent {
  data:any[]=[];
  constructor(private flight: FlightserviceService) {
    this.flight.getFlightData().subscribe((result:any) => {
      console.log(result)
      this.data=result
    });
   }
  
}
