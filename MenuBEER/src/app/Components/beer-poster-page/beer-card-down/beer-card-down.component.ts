import { Component, OnInit, Input } from '@angular/core';
import { DataBeerService} from '../../../Services/data-beer.service';

@Component({
  selector: 'app-beer-card-down',
  templateUrl: './beer-card-down.component.html',
  styleUrls: ['./beer-card-down.component.css']
})
export class BeerCardDownComponent implements OnInit {

  @Input() beerName: string;
  @Input() imageName: string;

  constructor(
    private dataBeerService : DataBeerService,
  ) { }

  ngOnInit() { }

}
