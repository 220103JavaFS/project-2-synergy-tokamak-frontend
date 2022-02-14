import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, of} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private url:string="http://localhost:8080/";
  private currentUser:User | undefined;

  users:User[] = [
    {
      userId:1,
      username:"tester",
      firstName:"merry",
      lastName:"tester",
      email:"mtester@email.com"
    },
  ]

  constructor(private http:HttpClient) { }

  // login(username:string, password:string):Observable<any>{
  //     let body = {
  //       "username":username,
  //       "password":password
  //     }; 
  //     console.log(body);
  //     return this.http.post<any>(this.url, body).pipe(
  //       catchError(this.handleError<any>('login', undefined))
  //     );
  // }

  // private handleError<T>(operation = 'operation', result?: T) {
  //   return (error: any): Observable<T> => {
  //     return of(result as T);
  //   }
  // }

  login(username:string, password:string){
    
    let body = {
      "username":username,
      "password":password
    }
   this.currentUser = this.users.find(u => {
      if(u.username.toLowerCase() == username.toLowerCase())
      {
        return username;
      }
      return undefined;
    })
    
}

  getCurrentUser():User | undefined {
    return this.currentUser;
  }

}
