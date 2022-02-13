import { Component, Input, OnInit, Output, ViewEncapsulation, EventEmitter } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { SidePanelService } from 'src/app/services/side-panel.service';
import { SideNavDirection } from '../side-nav-direction';
import { CommentService } from 'src/app/services/comment.service';

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
  comments!:any;

  constructor(private loginService:LoginService, private panelService: SidePanelService, private commentService:CommentService) { }

  ngOnInit(): void {
  }

  showPanelMethod(info:any) {
    this.satname = info.name;
    this.satid = info.id;
    this.showPanel = info.showPanel
    
  }
  closeEvent(event:boolean){
    this.showPanel = false;
  }

  getComments(){
    this.comments = this.commentService.getComments(this.satid);
    return this.comments;
  }

}
