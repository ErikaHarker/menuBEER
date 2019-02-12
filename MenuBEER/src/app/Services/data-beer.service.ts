import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import * as dataBeer from '../../assets/reading_files/BeersMainMenu.json';
import * as dataBeerDown from '../../assets/reading_files/BeersDown.json';
import * as dataBanner from '../../assets/reading_files/BannerDown.json';
import * as dataOuput from '../../assets/reading_files/BeersOuput.json';
import { Beer, FinalData } from '../Serializers/BeerSerializer';
//import { thenWriteJson } from 'then-write-json';

@Injectable({
  providedIn: 'root'
})
export class DataBeerService {
  public server : string;
  public values: string[] = [];
  public values2: string[] = [];
  constructor(private httpClient: HttpClient) {
    this.server = '/api/BeerDataPoster/';
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
