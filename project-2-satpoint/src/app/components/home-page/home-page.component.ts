<<<<<<< HEAD
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
=======
import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
>>>>>>> 5573365ebc11dd8acf9d17f814ce9284a7259d5f

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private loginService:LoginService) { }

  ngOnInit(): void {
  }

}
