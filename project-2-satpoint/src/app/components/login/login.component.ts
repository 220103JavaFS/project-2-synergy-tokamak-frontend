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
  displaySub = false;

  constructor() { }

  ngOnInit(): void {
  }

  display(event:MouseEvent):void{
    let id = (<HTMLButtonElement>event.target).id;
    //console.log(id);
    if(id==="register") {
      this.displayReg = true;
      this.displaySub = true;
      this.displayLog = false;
    }
    else if(id==="login" || id ==="submit") {
      this.displayLog = true;
      this.displayReg = false;
      this.displaySub = false;
    }
   

  }

}
