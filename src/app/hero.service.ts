import { Injectable } from '@angular/core';
import {Hero} from './hero';
import {HEROES} from './mock-heroes';

import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';

import {MessageService} from './message.service';

@Injectable()
export class HeroService {

  constructor(private messageService: MessageService) { }
  
  result: Observable<Hero[]>;
  /**
   * Return all heroes.
   */
  getHeroes() : Observable<Hero[]> {
    this.messageService.add("Calling Hero Fetch service");
    try {
      this.result = of(HEROES);
    } catch (err) {
      this.messageService.add("Exception while calling Hero service");
    }
    this.messageService.add("Hero fetch call successful");
    
    return this.result;
  }

}
