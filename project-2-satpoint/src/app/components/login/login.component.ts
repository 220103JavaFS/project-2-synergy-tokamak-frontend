import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

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
  

  constructor(private loginService:LoginService, private router:Router) { }

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
      }
      
    }
  }

  private isValidCred(username:HTMLInputElement, password:HTMLInputElement) {
    if(username && password) {
    let satpoint = <HTMLHeadingElement>document.getElementById("satpoint");
    if(username.checkValidity() && password.checkValidity()) {
      this.login(username.value, password.value);
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
    this.loginService.login(username, password).subscribe(out => 
      {
        console.log(out)
        if(out){ 
          console.log(out.headers);

              if(out === undefined){
                this.badLogin = true;
              }else {
                this.badLogin = false;
                sessionStorage.setItem("userId",out[0]);
                sessionStorage.setItem("username", out[1]);
                this.router.navigateByUrl("/homepage");
            }    
        }
        
    });
  
  
  }




}
