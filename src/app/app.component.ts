import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  header = 'Exercise 3';
  image1: string;
  image2: string;
  image3: string;
  alt1: string;
  alt2: string;
  alt3: string;
  total: number;


  constructor() {
    this.image1 = 'assets/images/dice/side1.png';
    this.alt1 = 'side 1';

    this.image2 = 'assets/images/dice/side2.png';
    this.alt2 = 'side 2';

    this.image3 = 'assets/images/dice/side3.png';
    this.alt3 = 'side 3';
    this.total = 0;


  }
  roll() {
    const rand1 = 1 + Math.floor( 6 * Math.random());
    this.image1 = `assets/images/dice/side${rand1}.png`;
    this.alt1 = `side ${rand1}`;

    const rand2 = 1 + Math.floor( 6 * Math.random());
    this.image2 = `assets/images/dice/side${rand2}.png`;
    this.alt2 = `side ${rand2}`;

    const rand3 = 1 + Math.floor( 6 * Math.random());
    this.image3 = `assets/images/dice/side${rand3}.png`;
    this.alt3 = `side ${rand3}`;
    this.total = rand1 + rand2 + rand3;
  }



}
