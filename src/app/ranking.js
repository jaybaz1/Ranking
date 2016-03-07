import {Component, View} from 'angular2/core';

@Component({
  selector: 'ranking'
})

@View({
  templateUrl: './ranking.html'
})

export class Ranking {

  constructor() {
    console.info('Ranking Component Mounted Successfully');
  }

}
