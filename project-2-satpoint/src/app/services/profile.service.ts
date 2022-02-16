import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private url:string ="http://localhost:8080/profile";

  constructor() { }
}
