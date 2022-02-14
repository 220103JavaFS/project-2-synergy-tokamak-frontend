import { Injectable } from '@angular/core';
import { Register } from '../models/register';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {


  private url:string ="http://localhost:8080";

  constructor(private http:HttpClient) { }

  register(thisuser:Register):Observable<Register>{
    return this.http.post(this.url + "users", thisuser) as Observable<Register>;
  }



  
}
