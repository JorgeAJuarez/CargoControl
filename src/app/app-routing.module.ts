import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardScreenComponent } from './Screens/dashboard-screen/dashboard-screen.component';
import { LoginScreenComponent } from './Screens/login-screen/login-screen.component';
import { CompanyScreenComponent } from './Screens/company-screen/company-screen.component';
import { TrackScreenComponent } from './Screens/track-screen/track-screen.component';

const routes: Routes = [
  { path: '', component: LoginScreenComponent },
  { path: 'admin-dashboad', component: DashboardScreenComponent },
  { path: 'company-screen', component: CompanyScreenComponent },
  { path: 'track-screen', component: TrackScreenComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
