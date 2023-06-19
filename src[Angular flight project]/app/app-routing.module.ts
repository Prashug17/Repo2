import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddFlightComponent } from './add-flight/add-flight.component';
import { UpdateFlightComponent } from './update-flight/update-flight.component';
import { DeleteFlightComponent } from './delete-flight/delete-flight.component';
import { GetAllFlightComponent } from './get-all-flight/get-all-flight.component';

const routes: Routes = [
  {path:'addflight', component:AddFlightComponent},
  {path: 'updateflight', component:UpdateFlightComponent},
  {path: 'deleteflight', component:DeleteFlightComponent},
  {path:'getallflights', component:GetAllFlightComponent}
  ];
  
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
