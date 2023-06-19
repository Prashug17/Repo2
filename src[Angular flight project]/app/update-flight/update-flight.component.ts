import { Component } from '@angular/core';
import { FlightserviceService } from '../flightservice.service';

@Component({
  selector: 'app-update-flight',
  templateUrl: './update-flight.component.html',
  styleUrls: ['./update-flight.component.scss']
})
export class UpdateFlightComponent {
  constructor(private flight:FlightserviceService){}
  flight_name!: string;
  flight_id!:number
  submit(reg:any) {
    console.log(reg.value.flight_name)
    const flightInput = {
      "flight_id": Number(reg.value.flight_id),
      "flight_name": reg.value.flight_name,
      "flight_date": reg.value.flight_date,
      "flight_source": reg.value.flight_source,
      "flight_destination": reg.value.flight_destination,
      "flight_price": Number(reg.value.flight_price),
      "flight_duration": Number(reg.value.flight_duration),
      "flight_capacity": Number(reg.value.flight_capacity)
    }
    this.flight_name=reg.value.flight_name
    this.flight_id=reg.value.flight_id
    this.flight.updateFlight(flightInput,this.flight_id).subscribe(result => {
      console.log(result)
      
    });
  }
  get fid1(){
    return this.flight_id
  }
}
