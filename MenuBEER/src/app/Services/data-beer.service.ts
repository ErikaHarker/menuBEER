import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import * as dataBeer from '../../../reading_files/BeersMainMenu.json';
import * as dataBeerDown from '../../../reading_files/BeersDown.json';
import * as dataBanner from '../../../reading_files/BannerDown.json';
import { FinalData } from '../Serializers/BeerSerializer';

@Injectable({
  providedIn: 'root'
})
export class DataBeerService {
  public server : string;
  constructor(private httpClient: HttpClient) {
    this.server = 'http://127.0.0.1:8000/';
  }

  public getJSON(){
    return dataBeer.beers;
  }

  public getJSONDown(){
    return dataBeerDown.beers;
  }

  public getJSONBanner(){
    return dataBanner.banners;
  }

  newData( b: FinalData){
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
