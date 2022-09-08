import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  baseUrl: string = 'https://localhost:7056/';

  constructor(private http: HttpClient) { }

  post(data: any, endpoint: string) {
    return this.http.post(this.baseUrl + endpoint, data);
  }

  get(endpoint: string) {
    return this.http.get(this.baseUrl + endpoint);
  }
}
