import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Sat } from '../models/sat';

@Injectable({
  providedIn: 'root'
})
export class SatService {

  public satList:Sat[] =[];

  constructor(private http:HttpClient) { }
}


