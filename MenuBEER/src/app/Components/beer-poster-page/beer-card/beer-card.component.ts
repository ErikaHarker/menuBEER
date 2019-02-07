import { Component, OnInit } from '@angular/core';
import { DataBeerService} from '../../../Services/data-beer.service';
import { Beer } from '../../../Serializers/Beer';
import { BeerPosterPageComponent } from '../beer-poster-page.component';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-beer-card',
  templateUrl: './beer-card.component.html',
  styleUrls: ['./beer-card.component.css']
})
export class BeerCardComponent implements OnInit {
  public beers: Beer[] = [];
  public imageName: any;
  public beerSelect: string;

  constructor(
    private dataBeerService : DataBeerService,
  ) { 
    this.imageName = "./assets/images/Beers/Poker.jpg";
  }

  ngOnInit() {
    let b = this.dataBeerService.getJSON();
    b.forEach(element => {
      this.beers.push(element);
    });
    this.beerSelect = this.beers[0].name;
    this.imageName = "./assets/images/Beers/"+this.beerSelect+".jpg";
  }

  onClickBeerImage(){
    this.imageName = "./assets/images/Beers/"+this.beerSelect+".jpg";
  }



}
