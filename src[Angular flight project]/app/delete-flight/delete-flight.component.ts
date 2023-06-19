import { Component } from '@angular/core';
import { FlightserviceService } from '../flightservice.service';

@Component({
  selector: 'app-delete-flight',
  templateUrl: './delete-flight.component.html',
  styleUrls: ['./delete-flight.component.scss']
})
export class DeleteFlightComponent {
  constructor(private flight: FlightserviceService) { }
  fid!: number;
  submit(reg:any) {
    console.log(reg.value.fname)
    this.fid=reg.value.fid
    this.flight.deleteFlight(this.fid).subscribe(result => {
      console.log(result)
      
    });
  }
  get fid1(){
    return this.fid
  }
}
