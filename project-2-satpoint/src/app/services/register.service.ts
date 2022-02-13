import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {


  private url:string ="http://localhost:8080/user";

  constructor(private http:HttpClient) { }

  register(id:number, username:string, password:string, firstname:string, lastname:string, email:string):Observable<any>{
    let body ={
      "username":username,
      "password":password,
      "firstname":firstname,
      "lastname":lastname,
      "email":email

    };
    console.log(body);
    return this.http.post<any>(this.url, body, {})
  }

  
}
