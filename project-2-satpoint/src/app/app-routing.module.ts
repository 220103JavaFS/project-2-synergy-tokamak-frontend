import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExternalPanelComponent } from './components/external-panel/external-panel.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SatInfoComponent } from './components/sat-info/sat-info.component';
import { SatListComponent } from './components/sat-list/sat-list.component';
import { UserFavoritesComponent } from './components/user-favorites/user-favorites.component';

const routes: Routes = [
  {path:"", component:LoginComponent, data:['login']},
  {path:"login",component:LoginComponent, data:['login']},
  {path:"profile", component:ProfileComponent, data:['profile']},
  {path:"sat-info", component:SatInfoComponent, data:['sat-info']},
  {path:"sat-list", component:SatListComponent, data:['sat-list']},
  {path:"homepage", component:HomePageComponent, data:['homepage']},
  {path:"favorites", component:UserFavoritesComponent, data:['favorites']},
  {path:"add", component:ExternalPanelComponent},
  {path: '**', component:PageNotFoundComponent}
];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
