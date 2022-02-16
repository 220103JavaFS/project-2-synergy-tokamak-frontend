import { Injectable } from '@angular/core';
import { Update } from '../models/profile';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private url:string ="http://localhost:8080/profile";

  constructor(private http:HttpClient) { }


  update(thisuser:Update):Observable<Update>{
    return this.http.post(this.url, thisuser) as Observable<Update>;
  }
}
