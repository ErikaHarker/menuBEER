import { Component, OnInit } from '@angular/core';
import { DataBeerService} from '../../Services/data-beer.service';
import { Beer } from '../../Serializers/Beer';

@Component({
  selector: 'app-beer-poster-page',
  templateUrl: './beer-poster-page.component.html',
  styleUrls: ['./beer-poster-page.component.css']
})
export class BeerPosterPageComponent implements OnInit {
  private waitRes: Boolean;
  private messageErrorPopup: Boolean;
  private messageSavePopup: Boolean;

  public beers: Beer[] = [];
  public beer1: string;
  public beer2: string;
  public beer3: string;
  public beer4: string;
  public beer5: string;
  public beer6: string;

  constructor(private dataBeerService : DataBeerService,) { 
    this.waitRes = false;
    this.messageErrorPopup = false;
    this.messageSavePopup = false;
  }

  ngOnInit() {
    let b = this.dataBeerService.getJSON();
    b.forEach(element => {
      this.beers.push(element);
    });
    this.beer1 = this.beers[0].name;
    this.beer2 = this.beers[0].name;
    this.beer3 = this.beers[0].name;
    this.beer4 = this.beers[0].name;
    this.beer5 = this.beers[0].name;
    this.beer6 = this.beers[0].name;
    
  }
  onClickBeerImage(){
    this.beer1;
    this.beer2;
    this.beer3;
    this.beer4;
    this.beer5;
    this.beer6;
  }

  onSubmitData(){

      let beersData: Beer[] = [];

      beersData.push({name: this.beer1, price: "1000"});
      beersData.push({name: this.beer2, price: "1000"});
      beersData.push({name: this.beer3, price: "1000"});
      beersData.push({name: this.beer4, price: "1000"});
      beersData.push({name: this.beer5, price: "1000"});
      beersData.push({name: this.beer6, price: "1000"});

      console.log(beersData)
      this.messageErrorPopup = false;
      this.waitRes = true;
      this.messageSavePopup = false;
      this.dataBeerService.newData(beersData)
        .then((res)=> {

          this.waitRes = false;
          this.messageSavePopup = true;

        }).catch( err =>{
          this.messageSavePopup = false;
          this.waitRes = false;
          this.messageErrorPopup = true;
          /*this.flashMessage.show(err.message, 
            {cssClass: 'alert-danger', timeout: 10000});*/
      });
      
  }

}
