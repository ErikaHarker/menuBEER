import { Component, OnInit, Input } from '@angular/core';
import { DataBeerService} from '../../../Services/data-beer.service';
import { Beer } from '../../../Serializers/BeerSerializer';
import { BeerPosterPageComponent } from '../beer-poster-page.component';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-beer-card',
  templateUrl: './beer-card.component.html',
  styleUrls: ['./beer-card.component.css']
})
export class BeerCardComponent implements OnInit {
 
  
  @Input() beerName: string;
  @Input() imageName: string;

  constructor(
    private dataBeerService : DataBeerService,
  ) { }

  ngOnInit() { }

}
