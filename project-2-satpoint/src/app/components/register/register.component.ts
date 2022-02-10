import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  @Output() displayEvent = new EventEmitter<MouseEvent>(); //triggers the parent

  constructor() { }

  ngOnInit(): void {
  }

  display(event:MouseEvent):void{

    //if submit button was clicked, do logic in register.ts then emit event to goback to the logon
    //else if cancle button go back to logon
    this.displayEvent.emit(event); 
  }

}
