import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserInputComponent } from './user-input/user-input.component';
import { SymptomsComponent } from './symptoms/symptoms.component';

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
