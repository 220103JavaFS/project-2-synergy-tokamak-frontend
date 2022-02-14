import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { RegisterService } from 'src/app/services/register.service';
import { Register } from 'src/app/models/register';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  username:string = "";
  password:string = "";
  firstName:string = "";
  lastName:string = "";
  email:string = "";

  @Output() displayEvent = new EventEmitter<MouseEvent>(); //triggers the parent




  constructor(private userService: RegisterService) { }

  ngOnInit(): void {
  }

  registerUser(): void{
    let user:Register = new Register(0, this.username, this.password, this.firstName, this.lastName, this.email);
    console.log(user);
    this.userService.register(user).subscribe(
      (response:Register)=>{
          
        }
      )
  }

  
  
  // registerUser(): void{
  //   if (this.username == "" || this.password == "" || this.firstName == "" || this.lastName == "" || this.email == "" ){
  //     alert ("Please fill out all of the fields");
  //   }
  //   else {
  //     let user:Register = new Register(0, this.username, this.password, this.firstName, this.lastName, this.email);
  //     console.log(user);
  //     this.userService.register(user).subscribe(
  //       (response:Register)=>{
          
  //       }
  //     )
  //   }
  // }


  display(event:MouseEvent):void{

    //if submit button was clicked, do logic in register.ts then emit event to goback to the logon
    //else if cancle button go back to logon
    this.displayEvent.emit(event); 
  }

}
