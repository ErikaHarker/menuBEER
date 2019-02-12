import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; 
import * as dataBeer from '../../assets/reading_files/BeersMainMenu.json';
import * as dataBeerDown from '../../assets/reading_files/BeersDown.json';
import * as dataBanner from '../../assets/reading_files/Footers.json';
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
    this.server = 'http://192.168.1.176:8000/api/BeerDataPoster/';
  }

  public getJSON(){
    return dataBeer.beers;
  }

  public getJSONDown(){
    return dataBeerDown.beers;
  }

  public getJSONBanner(){
    return dataBanner.Footers;
  }

  newData( b: FinalData){
    let headers = {
      'Content-Type':  'application/json'
    }

    return new Promise((resolve, reject)=>{
      let headers = {
        //'Access-Control-Allow-Origin': 'http://localhost',
        //'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
        //'Access-Control-Allow-Headers': 'X-Requested-With,content-type',
        //'Access-Control-Allow-Credentials': "true" 
      };

      this.httpClient.post(this.server, b, {headers: headers, responseType: 'text'}).subscribe(
        res => resolve(res),
        err => reject(err)
      );
    })
  }
}
