import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  // One way binding
  clickCounter: number = 0;
  // Two way binding
  name: string = 'Hey';

  constructor() {}

  ngOnInit(): void {}

  countClick(): void {
    this.clickCounter++;
  }
  setClasses() {
    let myClasses = {
      active: this.clickCounter > 4,
      inactive: this.clickCounter <= 4,
    };
    return myClasses;
  }
}
