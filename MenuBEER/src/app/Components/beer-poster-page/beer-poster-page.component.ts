import { Component, OnInit } from '@angular/core';
import { DataBeerService} from '../../Services/data-beer.service';
import { Beer } from '../../Serializers/BeerSerializer';

@Component({
  selector: 'app-beer-poster-page',
  templateUrl: './beer-poster-page.component.html',
  styleUrls: ['./beer-poster-page.component.css']
})
export class BeerPosterPageComponent implements OnInit {
  private waitRes: Boolean;
  private messageErrorPopup: Boolean;
  private messageSavePopup: Boolean;

  public beersTotal: Beer[] = [];
  public imageName: string[] = [];
  public selectedBeers: string[] = [];
  public totalBeer = 6;

  constructor(private dataBeerService : DataBeerService,) { 
    this.waitRes = false;
    this.messageErrorPopup = false;
    this.messageSavePopup = false;
  }

  ngOnInit() {
    let b = this.dataBeerService.getJSON();
    b.forEach(element => {
      this.beersTotal.push(element);
    });

    for (let _i = 0; _i < this.totalBeer; _i++) {
      this.selectedBeers.push(this.beersTotal[0].BeerName);
      this.imageName.push("./assets/images/Beers/"+this.selectedBeers[_i]+".png");
    }
    
  }

  onClickBeerImage(){
    for (let _i = 0; _i < this.imageName.length; _i++) {
      this.imageName[_i]=("./assets/images/Beers/"+this.selectedBeers[_i]+".jpg");
    }
    return;
  }

  onSubmitData(){

      let beersData: Beer[] = [];
      for (let _i = 0; _i < this.imageName.length; _i++) {
        let b: Beer;
        for (let _j = 0; _j < this.beersTotal.length; _j++){
          if(this.selectedBeers[_i]==this.beersTotal[_j].BeerName){
            b=this.beersTotal[_j];
            break;
          }
        }
        beersData.push(b);
      }

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
