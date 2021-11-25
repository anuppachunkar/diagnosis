import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserInputComponent } from './user-input/user-input.component';
import { SymptomsComponent } from './symptoms/symptoms.component';
import { PossibleCauseComponent } from './possible-cause/possible-cause.component';
import { BookAppointmentComponent } from './book-appointment/book-appointment.component';
import { MapComponent } from './map/map.component';

const routes: Routes = [
  { 
    path: 'user', 
    component: UserInputComponent 
  },
  { 
    path: 'symptoms', 
    component: SymptomsComponent 
  },
  { 
    path: 'causes', 
    component: PossibleCauseComponent 
  },
  { 
    path: 'appointment', 
    component: BookAppointmentComponent 
  },
  { 
    path: 'map', 
    component: MapComponent 
  },
  { 
    path: '', 
    redirectTo: 'user',
    pathMatch: 'full'
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
