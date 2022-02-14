import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {


  private url:string ="http://localhost:8080";

  constructor(private http:HttpClient) { }

  register(thisuser:User):Observable<User>{
    return this.http.post(this.url + "users", thisuser) as Observable<User>;
  }



  
}
