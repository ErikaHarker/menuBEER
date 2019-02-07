import { Component, OnInit, Input } from '@angular/core';
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
 
  public imageName: any;
  @Input() beerName: string;

  constructor(
    private dataBeerService : DataBeerService,
  ) { 
    this.imageName = "./assets/images/Beers/Poker.jpg";
  }

  ngOnInit() {
    this.imageName = "./assets/images/Beers/"+this.beerName+".jpg";
  }

  onClickBeerImage(){
    this.imageName = "./assets/images/Beers/"+this.beerName+".jpg";
  }



}
