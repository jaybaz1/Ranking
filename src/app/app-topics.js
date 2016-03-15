import {Component, View, OnInit, Input} from 'angular2/core';
import { HTTP_PROVIDERS } from 'angular2/http';
import { DataService } from '/app/data/data-service';
//import { Dragula, DragulaService } from '/lib/dragula';

@Component({
  selector: 'topics',
  providers:[HTTP_PROVIDERS],
  templateUrl: '/app/app-topics.html'
  //directives:[Dragula],
  //viewProviders: [DragulaService]
})

export class TopicsComponent {
        
    static get parameters(){
        return [[DataService]];
    }
    
    constructor(dataService){
        
        // Services
        this._dataService = dataService;
    }
        
    ngOnInit(){ 
        console.log('topics init');
        this._dataService.getCategories
            .subscribe(
                cat => this.categories = cat 
            )
    }

}  