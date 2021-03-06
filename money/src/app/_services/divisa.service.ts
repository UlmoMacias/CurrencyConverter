import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DivisaService {

  API_URI = 'https://api.exchangerate-api.com/v4/latest/';

  constructor(private http:HttpClient) { }

  getValues(id: string) {
    return this.http.get(this.API_URI + id);
  }




}
