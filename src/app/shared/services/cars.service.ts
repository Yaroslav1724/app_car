import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Car } from '../models';

@Injectable({
  providedIn: 'root',
})
export class CarsService {
  constructor(private http: HttpClient) {}

  getCars(): Observable<Car[]> {
    let headers = new HttpHeaders({
      'x-rapidapi-host': 'car-data.p.rapidapi.com',
      'x-rapidapi-key': 'b72eadb739msh5ecbdf78161e778p136452jsn81830c7ff274',
    });
    let params = { limit: '25', page: '0' };
    return this.http.get<Car[]>('https://car-data.p.rapidapi.com/cars', {
      headers: headers,
      params: params,
    });
  }
}
