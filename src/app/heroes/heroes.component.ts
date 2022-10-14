import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.sass']
})
export class HeroesComponent implements OnInit {
  hero: Hero = {
    id: 1,
    name: 'Josu Adan Legarra',
    telephone: 34633205337,
    email: 'adan.josu92@gmail.com',
    gitHub: 'https://github.com/Josu2506',
    linkedIn: 'https://www.linkedin.com/in/josu-ad%C3%A1n-legarra-b2547b1a6/'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
