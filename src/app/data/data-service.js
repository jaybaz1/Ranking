import { Injectable, Inject } from 'angular2/core';
import { Http, Response } from 'angular2/http';

@Injectable()
export class DataService {
    
    constructor(_http: Http) {
        
        this.getOptions = _http.get('/api/options.json')
            .map(response => response.json());
        
        this.getCategories = _http.get('/api/categories.json')
            .map(response => response.json());
    }
    

    
    /*  
    this.setCat = http.get('/api/categories.json')
      .map(response => response.json()); 
    */
    
}  
  