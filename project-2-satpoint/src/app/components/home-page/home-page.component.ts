import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

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
