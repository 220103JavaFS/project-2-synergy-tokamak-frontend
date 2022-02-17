import { Component, OnInit, Input } from '@angular/core';
import { CommentService } from 'src/app/services/comment.service';

@Component({
  selector: 'app-comment-cards',
  templateUrl: './comment-cards.component.html',
  styleUrls: ['./comment-cards.component.css']
})
export class CommentCardsComponent implements OnInit {
  @Input() comments!:any[];
  @Input() satid=0;
  @Input() satNoradId="";
  @Input() username: string | undefined;
  @Input() onUserProfile = false;
  @Input() refresh = false;
  userId: string | undefined;


  constructor(private commentService:CommentService) { }

  ngOnInit(): void {
    this.username = sessionStorage.getItem("username") || undefined;
    this.userId = sessionStorage.getItem("userId") || undefined;
    if(this.satNoradId) this.commentService.getComments(this.satNoradId).subscribe(res =>{
      this.comments = res.reverse();
      console.log(res);
    });
}


  
  getComments(){
    console.log("in comment cards");
    console.log(this.satNoradId);
    if(this.satNoradId) this.commentService.getComments(this.satNoradId).subscribe(res =>{
      console.log(res);
      this.comments = res;
    });
  
        
    // if(this.username) return this.commentService.getUserComments(this.username);
    // // this.comments = this.commentService.getComments(this.satid);
    return this.comments;
  
}
}
