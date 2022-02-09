import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SatInfoComponent } from './components/sat-info/sat-info.component';
import { SatListComponent } from './components/sat-list/sat-list.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomePageComponent,
    ProfileComponent,
    SatInfoComponent,
    SatListComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
