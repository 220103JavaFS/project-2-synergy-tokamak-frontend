import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, of} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  user: User | undefined;
  private url:string="http://localhost:8080/logon";

  constructor(private http:HttpClient) { }

  login(username:string, password:string):Observable<any>{
   
      let body = {
        "username":username,
        "password":password
      }; 
      console.log(body);
      // return this.http.post<any>(this.url, body, {
      //   // withCredentials:true,
      // }).pipe(
      //   catchError(this.handleError<any>('login', undefined))
      // );
      return this.http.get<any>(this.url).pipe(
        catchError(this.handleError<any>('login', undefined))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      return of(result as T);
    }
  }

}
