import { Component, OnInit } from '@angular/core';
import { BreweriesService } from '../../../services/breweries.service';

@Component({
  selector: 'app-breweries',
  templateUrl: './breweries.component.html',
  styleUrls: ['./breweries.component.scss'],
})
export class BreweriesComponent implements OnInit {
  listOfBrewries: Array<any> = [];
  constructor(private breweriesService: BreweriesService) {}

  ngOnInit(): void {
    this.breweriesService.getBreweries().subscribe(
      (response) => {
        console.log('Response');
        this.listOfBrewries = response.body;
      },
      (error) => {
        console.log('Error');
        console.dir(error);
      },
      () => {
        console.log('Complete');
      }
    );
  }
}
