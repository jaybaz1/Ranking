import {Component, View, OnInit, Input} from 'angular2/core';
import { HTTP_PROVIDERS } from 'angular2/http';
import { DataService } from '/app/data/data-service';
//import { Dragula, DragulaService } from '/lib/dragula';

@Component({
  selector: 'features',
  providers:[HTTP_PROVIDERS],
  templateUrl: '/app/app-features.html',
  //directives:[Dragula],
  //viewProviders: [DragulaService]
})

export class FeaturesComponent {
        
    static get parameters(){
        return [[DataService]];
    }
    
    constructor(dataService){
        
        // Services
        this._dataService = dataService;
        
        this.isEnabled = true;
        this.searchPhase;
    }
        
    ngOnInit(){ 
        console.log('features init');
        this._dataService.getFeatures
            .subscribe(
                features => this.features = features
            )
    }

}  