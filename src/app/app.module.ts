import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginScreenComponent } from './Screens/login-screen/login-screen.component';
import { DashboardScreenComponent } from './Screens/dashboard-screen/dashboard-screen.component';
import { CompanyControlComponent } from './controls/company-control/company-control.component';
import { TrackControlComponent } from './controls/track-control/track-control.component';
import { CompanyScreenComponent } from './Screens/company-screen/company-screen.component';
import { TrackScreenComponent } from './Screens/track-screen/track-screen.component';
import { TrackLogControlComponent } from './controls/track-log-control/track-log-control.component';
import { PkiControlComponent } from './controls/pki-control/pki-control.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatStepperModule} from '@angular/material/stepper';
import { CompanyFormComponent } from './Forms/company-form/company-form.component';
import { TrackFormComponent } from './Forms/track-form/track-form.component';
import { CheckpointFormComponent } from './Forms/checkpoint-form/checkpoint-form.component';
import { MapControlComponent } from './controls/map-control/map-control.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { MatGridListModule } from '@angular/material/grid-list';
import { NgChartsModule } from 'ng2-charts'; 

@NgModule({
  declarations: [
    AppComponent,
    LoginScreenComponent,
    DashboardScreenComponent,
    CompanyControlComponent,
    TrackControlComponent,
    CompanyScreenComponent,
    TrackScreenComponent,
    TrackLogControlComponent,
    CompanyFormComponent,
    TrackFormComponent,
    CheckpointFormComponent,
    PkiControlComponent,
    MapControlComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatSelectModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatStepperModule,
    CommonModule,
    GoogleMapsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    MatGridListModule,
    NgChartsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
