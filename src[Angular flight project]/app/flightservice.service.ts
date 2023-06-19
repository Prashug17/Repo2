import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FlightserviceService {
  constructor(private http:HttpClient) { }
  getFlightData(){
    return this.http.get("http://localhost:8080/api/flights");
  }

  addFlight(input:any){
    return this.http.post("http://localhost:8080/api/flight",input)
  }

  updateFlight(input:any,id:number){
    return this.http.put("http://localhost:8080/api/putflight/"+id,input);

  }

  deleteFlight(id:number){
    return this.http.delete("http://localhost:8080/api/deleteflight/"+id);
  }
}
