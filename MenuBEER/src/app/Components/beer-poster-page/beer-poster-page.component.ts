import { Component, OnInit } from '@angular/core';
import { DataBeerService} from '../../Services/data-beer.service';
import { Beer, Banner, FinalData } from '../../Serializers/BeerSerializer';

@Component({
  selector: 'app-beer-poster-page',
  templateUrl: './beer-poster-page.component.html',
  styleUrls: ['./beer-poster-page.component.css']
})
export class BeerPosterPageComponent implements OnInit {
  public waitRes: Boolean;
  public messageErrorPopup: Boolean;
  public messageSavePopup: Boolean;

  public beersTotal: Beer[] = [];
  public beersTotalDown: Beer[] = [];
  public imageName: string[] = [];
  public selectedBeers: string[] = [];
  public bannersTotal: Banner[] = [];
  public totalBeer = 6;
  public selectedBeerDown: string;
  public imageNameDown: string;
  public selectedBanner: string;
  public imageNameBanner: string;

  public title: string;
  public finalText1: string;
  public finalText2: string;

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

    let bd = this.dataBeerService.getJSONDown();
    bd.forEach(element => {
      this.beersTotalDown.push(element);
    });

    this.selectedBeerDown = this.beersTotalDown[0].BeerName;
    this.imageNameDown = "./assets/images/BeersDown/"+this.selectedBeerDown+".png";

    let bn = this.dataBeerService.getJSONBanner();
    bn.forEach(element => {
      this.bannersTotal.push(element);
    });
    this.selectedBanner = this.bannersTotal[0].Name;
    this.title = this.bannersTotal[0].Title;
    this.finalText1=this.bannersTotal[0].Text1;
    this.finalText2=this.bannersTotal[0].Text2;
    this.imageNameBanner = "./assets/images/BeerBannersDown/"+ this.selectedBanner +".png";
    
  }

  onClickBeerImage(event : any){
    for (let _i = 0; _i < this.imageName.length; _i++) {
      this.imageName[_i]=("./assets/images/Beers/"+this.selectedBeers[_i]+".png");
    }
    return;
  }

  onClickBeerDownImage(event : any){
    this.imageNameDown = "./assets/images/BeersDown/"+this.selectedBeerDown+".png";
    return;
  }

  onClickBannerImage(event : any){
    for (let _i = 0; _i < this.bannersTotal.length; _i++){
      if(this.selectedBanner==this.bannersTotal[_i].Name){
        this.title= this.bannersTotal[_i].Title;
        this.finalText1=this.bannersTotal[_i].Text1;
        this.finalText2=this.bannersTotal[_i].Text2;
        break;
      }
    }
    this.imageNameBanner = "./assets/images/BeerBannersDown/"+ this.selectedBanner +".png";
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

      let beerDownData: Beer;
      for (let _i = 0; _i < this.beersTotalDown.length; _i++){
        if(this.selectedBeerDown==this.beersTotalDown[_i].BeerName){
          beerDownData=this.beersTotalDown[_i];
          break;
        }
      }

      let banner: Banner = {"Name": this.selectedBanner,
                            "Title": this.title,
                            "Text1": this.finalText1,
                            "Text2": this.finalText2};

      let finalData: FinalData= { "BeerMain": beersData,
                                  "BeerDown": beerDownData,
                                  "Banner": banner};

      console.log(finalData)
      this.messageErrorPopup = false;
      this.waitRes = true;
      this.messageSavePopup = false;

      this.dataBeerService.newData(finalData)
        .then((res)=> {

          this.waitRes = false;
          this.messageSavePopup = true;

        }).catch( err =>{
          console.log(err);
          this.messageSavePopup = false;
          this.waitRes = false;
          this.messageErrorPopup = true;
      });
      
  }

}
