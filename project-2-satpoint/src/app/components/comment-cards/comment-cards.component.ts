import { Component, OnInit, Input } from '@angular/core';
import { CommentService } from 'src/app/services/comment.service';

@Component({
  selector: 'app-comment-cards',
  templateUrl: './comment-cards.component.html',
  styleUrls: ['./comment-cards.component.css']
})
export class CommentCardsComponent implements OnInit {
  comments!:any;
  @Input() satid="";
  @Input() username: String | undefined;
  @Input() onUserProfile = false;


  constructor(private commentService:CommentService) { }

  ngOnInit(): void {
  }

  
  getComments(){
    if(this.satid) return this.commentService.getComments(this.satid);
    if(this.username) return this.commentService.getUserComments(this.username);
    // this.comments = this.commentService.getComments(this.satid);
    return this.comments;
  }
}
