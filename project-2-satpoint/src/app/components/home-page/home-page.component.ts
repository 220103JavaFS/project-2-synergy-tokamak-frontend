import { Component, Input, OnInit, Output, ViewEncapsulation, EventEmitter } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { SidePanelService } from 'src/app/services/side-panel.service';
import { SideNavDirection } from '../side-nav-direction';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  @Output() satname="";
  @Output() satid="";
  @Input() showPanel !:boolean;
  right = SideNavDirection.Right;

  constructor(private loginService:LoginService, private panelService: SidePanelService) { }

  ngOnInit(): void {
  }

  showPanelMethod(info:any) {
    console.log(3)
   
    this.satname = info.name;
    this.satid = info.id;
    this.showPanel = info.showPanel
    
  }
  closeEvent(event:boolean){
    this.showPanel = false;
  }

}
