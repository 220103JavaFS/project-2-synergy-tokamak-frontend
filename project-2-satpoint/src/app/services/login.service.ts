import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError, Observable, of} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private url:string="http://localhost:8080/";
  public currentUser:User | undefined;


  constructor(private http:HttpClient) { }

  login(username:string, password:string):Observable<any>{
      let body = {
        "username":username,
        "password":password
      }; 
      let respone = this.http.post<any>(this.url, body).pipe(
        catchError(this.handleError<any>('login', undefined))
      );
      
      console.log(respone);
      
      return respone;
  }
  getUser(username:string | null):Observable<any>{
    let res = this.http.get<any>(this.url+"getUser/"+username);
    console.log(res);
    return res;
  }

  logout(){
    let respone = this.http.post<any>(this.url+"logout",{}).pipe(
      catchError(this.handleError<any>('logout', undefined))
    );
}

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      return of(result as T);
    }
  }

}
