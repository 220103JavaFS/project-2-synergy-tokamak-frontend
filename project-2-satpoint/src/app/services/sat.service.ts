import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Sat } from '../models/sat';

@Injectable({
  providedIn: 'root',
})
export class SatService {

  baseURL: string = "http://localhost:8080/"; //will need to be changed for hosting

  public satList: Sat[] = [];

  private static joelApiKey = 'NPFFJL-ZH53BK-5ECGZG-4U96';

  //TEMP
  //CHANGE THESE WITH USERS POSITION
  private latitude: string = '41.433';
  private longitude: string = '-91.054';

  private apiKey: string = SatService.joelApiKey;

  private getSatUrl: string =
    'https://api.n2yo.com/rest/v1/satellite/positions';

  constructor(private http: HttpClient) {}

  getSatLocData(noradId: string): Observable<any> {
    return this.http.get(
      `/api/satellite/positions/${noradId}/${this.latitude}/${this.longitude}/0/1/&apiKey=${this.apiKey}`
    );
    }

  getAllSat(): Observable<Sat[]> {
    return this.http.get<Sat[]>(
      this.baseURL + 'satellite');
  }

  getSatByUser(userId: number): Observable<Sat[]> {
    return this.http.get<Sat[]>(
      this.baseURL + 'satellite/userID/${userId}');
  }

  getSatFavorites(): Observable<Sat[]> {
    return this.http.get<Sat[]>(
      this.baseURL + 'satellite/favorites');
  }

}
