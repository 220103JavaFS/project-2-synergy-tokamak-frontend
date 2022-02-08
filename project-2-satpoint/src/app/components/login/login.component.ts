import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  displayReg = false;
  displayLog = false;

  constructor() { }

  ngOnInit(): void {
  }

  display(event:MouseEvent):void{
    let id = (<HTMLButtonElement>event.target).id;
    //console.log(id);
    if(id==="register") {
      this.displayReg = true;
      this.displayLog = false;
    }
    else if(id==="login") {
      this.displayLog = true;
      this.displayReg = false;
    }

  }

}
