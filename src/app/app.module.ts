import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserInputComponent } from './user-input/user-input.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SymptomsComponent } from './symptoms/symptoms.component';
import { MatTabsModule } from "@angular/material/tabs";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatSelectModule } from "@angular/material/select";
import { MatButtonModule } from "@angular/material/button";
// import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatTableModule } from "@angular/material/table";
import { MatRadioModule } from "@angular/material/radio";
import { PossibleCauseComponent } from './possible-cause/possible-cause.component';
import { HttpClientModule } from '@angular/common/http'
import {MatExpansionModule} from '@angular/material/expansion';
import { BookAppointmentComponent } from './book-appointment/book-appointment.component';
import { MapComponent } from './map/map.component';
import { GoogleMapsModule } from '@angular/google-maps';
import {MatCardModule} from '@angular/material/card';;

@NgModule({
  declarations: [
    AppComponent,
    UserInputComponent,
    HeaderComponent,
    FooterComponent,
    SymptomsComponent,
    PossibleCauseComponent,
    BookAppointmentComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    MatFormFieldModule,
    HttpClientModule,
    MatInputModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatSelectModule,
    MatButtonModule,
    MatTableModule,
    FlexLayoutModule,
    MatRadioModule,
    MatExpansionModule,
    GoogleMapsModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
