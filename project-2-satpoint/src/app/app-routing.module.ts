import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SatInfoComponent } from './components/sat-info/sat-info.component';

const routes: Routes = [
  {path:"", component:LoginComponent},
  {path:"login",component:LoginComponent},
  {path:"profile", component:ProfileComponent},
  {path:"sat-info", component:SatInfoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
