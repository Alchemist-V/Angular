import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero';
import {HEROES}  from '../mock-heroes';
import {HeroService} from './../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }
  
  heroes: Hero[];
  selectedHero: Hero;

  getHeroes () {
    this.heroes = this.heroService.getHeroes();
  }

  onSelect (hero: Hero) {
    this.selectedHero = hero;
  }
}
