import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AddFlightComponent } from './add-flight/add-flight.component';
import { UpdateFlightComponent } from './update-flight/update-flight.component';
import { DeleteFlightComponent } from './delete-flight/delete-flight.component';
import { GetAllFlightComponent } from './get-all-flight/get-all-flight.component';
import { FlightserviceService } from './flightservice.service';

@NgModule({
  declarations: [
    AppComponent,
    AddFlightComponent,
    UpdateFlightComponent,
    DeleteFlightComponent,
    GetAllFlightComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [FlightserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
