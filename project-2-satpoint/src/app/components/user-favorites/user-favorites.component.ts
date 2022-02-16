import { Component, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { SidePanelService } from 'src/app/services/side-panel.service';
import { SideNavDirection } from '../side-nav-direction';
import { CommentService } from 'src/app/services/comment.service';
import { User } from 'src/app/models/user';
import { Sat } from 'src/app/models/sat';
import { Comment } from 'src/app/models/comment';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-user-favorites',
  templateUrl: './user-favorites.component.html',
  styleUrls: ['./user-favorites.component.css']
})
export class UserFavoritesComponent implements OnInit {


  @Output() satname="";
  @Output() satid=0;
  @Output() satNoradId="";
  @Input() showPanel !:boolean;
  tempSatid = "";
  right = SideNavDirection.Right;
  // comments!:any;
  message='';
  term="";
  page="userFavorites";

  constructor(private loginService:LoginService, private panelService: SidePanelService, private commentService:CommentService) { }

  ngOnInit(): void {
  }

  showPanelMethod(info:any) {

    this.satname = info.name;
    this.satid = info.id;
    this.satNoradId = info.noradId;
    this.showPanel = info.showPanel;
    if(this.tempSatid != this.satNoradId) {
      this.clear();
    }
    this.satNoradId = this.satNoradId;
    
  }
  closeEvent(event:boolean){
    this.showPanel = false;
    
  }

  submit(){
    if(this.message){
    this.commentService.sendComment(
     
      new Comment(this.message, 
      new User(1, "tester", "tester", "tester", "tester", ""), 
      new Sat(this.satid, this.satNoradId, this.satname,"",0), new Date(Date.now()).toLocaleString()));
    }
    this.clear();
  }

  cancel(){
    this.clear();
    this.closeEvent(false);
  }

  clear(){
    this.message="";
  }

  filter(event:string){
    console.log(event)
    this.term = event;
  }

}
