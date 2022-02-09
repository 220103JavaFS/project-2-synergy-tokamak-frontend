import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ControlContainer } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
  displayReg = false;
  displayLog = false;
  displaySub = false;
  displayCan = false;
  displayLogBtn = true;
  displayRegBtn = true;
  badPassword = false;
  badUsername = false;
  badLogin = false;
  

  constructor(private loginService:LoginService, private registerService:RegisterService) { }

  ngOnInit(): void {
  }

  display(event:MouseEvent):void{
    let id = (<HTMLButtonElement>event.target).id;
    if(id==="register") {
      this.displayReg = true;
      this.displaySub = true;
      this.displayLog = false;
      this.displayLogBtn = false;
      this.displayCan = true;
      this.displayRegBtn = false;
    }
    else {
      this.displayLog = true;
      this.displayReg = false;
      this.displaySub = false;
      this.displayLogBtn = true;
      this.displayCan = false;
      this.displayRegBtn = true;

      if(id==="login") {
        const username = <HTMLInputElement>document.getElementById("username");
        const password = <HTMLInputElement>document.getElementById("password");
        this.isValidCred(username, password)
      }else if(id==="submit") {

      }
      
    }
  }

  private isValidCred(username:HTMLInputElement, password:HTMLInputElement) {
    if(username && password) {
    let satpoint = <HTMLHeadingElement>document.getElementById("satpoint");
    if(username.checkValidity() && password.checkValidity()) {
      this.login(username.value, password.value);
      username.classList.remove("is-invalid");
      password.classList.remove("is-invalid");
      //route to user's profile
    } 
    else {
  
    if(!username.checkValidity()) {
      username.classList.add("is-invalid");
      this.badUsername = true;
      console.log("bad username")
    }
    else{
      username.classList.remove("is-invalid");
      this.badUsername = false;
      console.log("good username")
    }
  
    if(!password.checkValidity()){
      password.classList.add("is-invalid");
      this.badPassword = true;
      console.log("bad pw");
    }else {
      password.classList.remove("is-invalid");
      this.badPassword = false;
      console.log("good pw")
    }
    satpoint.classList.remove("is-invalid");
  }

  }
}

  private login(username:string, password:string){
    let satpoint = <HTMLHeadingElement>document.getElementById("satpoint");
    // this.loginService.login(username, password).subscribe(out => 
    //   {
    //     if(out){
    //       this.loginService.user = out;          
    //     }
    // });
    if(this.loginService.user){
      satpoint.classList.remove("is-invalid"); //temp
      this.badLogin = false;
      console.log("good user");
    }else {
      satpoint.classList.add("is-invalid");
      this.badLogin = true;
      console.log("bad user")
    }
  }
}
