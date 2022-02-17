import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of} from 'rxjs';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';


@Injectable({
  providedIn: 'root'
})
export class CommentService {
  private url:string="http://localhost:8080/comments";
 
  constructor(private http:HttpClient) { }


  getComments(noradId:string):Observable<any[]> {
    let res = this.http.get<any>(this.url+"noradId/"+noradId);
    console.log(res);
    return res;
  }

  getUserComments(username:string):Observable<any[]> {
    let res = this.http.get<any>(this.url+"username/"+username);
    console.log(res);
    return res;
  }

  sendComment(userId:string, noradId:string, message:string, date:string):Observable<any[]> {
    let body = {
      userId:Number.parseInt(userId),
      noradId:Number.parseInt(noradId),
      message: message,
      date: date
    }; 
    let respone = this.http.post<any>(this.url, body).pipe(
      catchError(this.handleError<any>('sendComment', undefined))
    );
    
    console.log(respone);
    return respone;
}

private handleError<T>(operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {
    return of(result as T);
  }
}


}
