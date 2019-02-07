import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import * as data from '../../../reading_files/Beers.json';

@Injectable({
  providedIn: 'root'
})
export class DataBeerService {
  constructor(private http: HttpClient) {
  }

  public getJSON(){
    return data.beers;
  }
}
