import { Injectable } from '@angular/core';
import { Comment } from '../models/comment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  private comments:Comment[] = [
    {
      description:"My first satellite!",
      user: {
        userId:1,
        username:"tester",
        firstName:"bob",
        lastName:"burgers",
        email:"burgers@email.com",
        aboutMe:""
      },
      sat: {
        satId:"36516",
        satName:"SES 1",
        satPicture:"",
        numFavorites:0
      },
      date:new Date(Date.now()).toLocaleString()
    }, 
    {
      description:"Bob spamming messages!",
      user: {
        userId:1,
        username:"bob's burgers",
        firstName:"bob",
        lastName:"burgers",
        email:"burgers@email.com",
        aboutMe:""
      },
      sat: {
        satId:"36516",
        satName:"SES 1",
        satPicture:"",
        numFavorites:0
      },
      date:new Date(Date.now()).toLocaleString()
    }, 
    {
      description:"I have yet to see this satellite",
      user: {
        userId:1,
        username:"bob's burgers",
        firstName:"bob",
        lastName:"burgers",
        email:"burgers@email.com",
        aboutMe:""
      },
      sat: {
        satId:"25544",
        satName:"SPACE STATION",
        satPicture:"",
        numFavorites:0
      },
      date:new Date(Date.now()).toLocaleString()
    }, 

  ];
  constructor() { }

  getComments(satid:string):any[] {
    return this.comments.reverse().filter(comment => comment.sat.satId == satid);
  }

  getUserComments(username:String):any[]{
    return this.comments.reverse().filter(comment => comment.user.username.toLowerCase() == username.toLowerCase())
  }

  sendComment(comment:Comment){
      this.comments.push(comment);
  }

}
