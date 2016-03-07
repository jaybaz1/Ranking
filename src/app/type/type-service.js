import { Injectable } from 'angular2/core';
import { Http, Response } from 'angular2/http';

@Injectable()
export class TypeService {
  constructor(http: Http) {
    this.types = http.get('/api/types.json')
      .map(response => response.json());
      
      
    this.categories = http.get('/api/categories.json')
      .map(response => response.json());
  }
}
 