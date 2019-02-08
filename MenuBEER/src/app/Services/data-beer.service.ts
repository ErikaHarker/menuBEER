import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import * as data from '../../../reading_files/BeersMainMenu.json';
import { Beer } from '../Serializers/BeerSerializer';

@Injectable({
  providedIn: 'root'
})
export class DataBeerService {
  public server : string;
  constructor(private httpClient: HttpClient) {
    this.server = 'http://127.0.0.1:8000/';
  }

  public getJSON(){
    return data.beers;
  }

  newData( b: Beer[]){
    let headers = {
      'Content-Type':  'application/json'
    }

    return new Promise((resolve, reject)=>{
      this.httpClient.post(this.server, b, {headers: headers, responseType: 'text'}).subscribe(
        res => resolve(res),
        err => reject(err)
      );
    })
  }
}
