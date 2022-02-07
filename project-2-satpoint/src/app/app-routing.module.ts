import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SatInfoComponent } from './components/sat-info/sat-info.component';

const routes: Routes = [
  {path:"", component:LoginComponent, data:['login']},
  {path:"login",component:LoginComponent, data:['login']},
  {path:"profile", component:ProfileComponent, data:['profile']},
  {path:"sat-info", component:SatInfoComponent, data:['sat-info']},
  {path:"homepage", component:HomePageComponent, data:['homepage']}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }