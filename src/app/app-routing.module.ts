import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LaunchesComponent } from './components/launches.component';
import { LaunchDetailsComponent } from './components/launch-details.component';

const routes: Routes = [
  { path: '', redirectTo: '/launches', pathMatch: 'full' },
  { path: 'launches', component: LaunchesComponent },
  { path: 'launchdetails/:id', component: LaunchDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
