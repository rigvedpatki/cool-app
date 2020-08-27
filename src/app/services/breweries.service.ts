import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BreweriesService {
  baseUrl: string = 'https://api.openbrewerydb.org/breweries';
  constructor(private http: HttpClient) {}

  getBreweries(): Observable<HttpResponse<any>> {
    return this.http.get(this.baseUrl, {
      observe: 'response',
      responseType: 'json',
    });
  }
}
