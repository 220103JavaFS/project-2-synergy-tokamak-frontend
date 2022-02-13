import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  private comments = [
    {
      description:"My first satellite!",
      user: {
        userId:1,
        username:"bob's burgers",
        firstname:"bob",
        lastname:"burgers",
        email:"burgers@email.com"
      },
      sat: {
        id:"36516",
        name:"SES 1",
        url:"",
        favorites:0
      },
      date:new Date(Date.now()).toLocaleString()
    }, 
    {
      description:"Bob spamming messages!",
      user: {
        userId:1,
        username:"bob's burgers",
        firstname:"bob",
        lastname:"burgers",
        email:"burgers@email.com"
      },
      sat: {
        id:"36516",
        name:"SES 1",
        url:"",
        favorites:0
      },
      date:new Date(Date.now()).toLocaleString()
    }, 
    {
      description:"I have yet to see this satellite",
      user: {
        userId:1,
        username:"bob's burgers",
        firstname:"bob",
        lastname:"burgers",
        email:"burgers@email.com"
      },
      sat: {
        id:"25544",
        name:"SPACE STATION",
        url:"",
        favorites:0
      },
      date:new Date(Date.now()).toLocaleString()
    }, 

  ];
  constructor() { }

  getComments(satid:string):any[] {
    return this.comments.filter(comment => comment.sat.id == satid);
  }
}
